// Verifies that every host's product layer implements the same API.
// CONTRACT.md is normative and identical for all four hosts, so the registry's view of
// src/components/* must match across them. Any difference is host-authoring variance,
// which would contaminate the comparison — the whole design rests on it being zero.
//
// Usage: node scripts-verify-contract.mjs host-shadcn host-mui host-chakra host-mantine

import { readFileSync } from "node:fs";

const hosts = process.argv.slice(2);

// Only the 20 components CONTRACT.md defines. The M and L packages add filler around them,
// and that filler is host-specific by design — comparing it would report a mismatch on every
// component that is not part of the contract.
const CONTRACT = new Set([
	"AppShell", "TimelineHeader", "SearchField", "NotificationBell", "UserAvatar",
	"FeedTabs", "PostComposer", "VisibilityPicker", "PostCard", "PostAuthorLine",
	"PostBody", "QuotedPost", "PostMedia", "PostActionBar", "ActionButton",
	"TrendPanel", "TrendItem", "SuggestedUserPanel", "SuggestedUserRow", "FollowButton",
]);

// Normalized signature for one component: prop name, kind, required, enum options, and
// the shape of a json prop. Descriptions and defaults are excluded — a host is free to
// word its JSDoc differently, and the contract does not pin defaults.
function signature(component) {
	const props = Object.entries(component.props ?? {})
		.map(([name, p]) => {
			const options = p.options ? `(${[...p.options].sort().join("|")})` : "";
			const shape = p.shape
				? `{${p.shape.type}:${p.shape.fields.map((f) => `${f.name}:${f.type}`).join(",")}}`
				: "";
			return `${name}:${p.kind}${options}${shape}${p.required ? "*" : ""}`;
		})
		.sort();
	const slots = Object.entries(component.slots ?? {})
		.map(([name, s]) => `${name}${s.required ? "*" : ""}`)
		.sort();
	return `props[${props.join(" ")}] slots[${slots.join(" ")}]`;
}

const perHost = new Map();
for (const host of hosts) {
	const registry = JSON.parse(readFileSync(`hosts/${host}/.yosegi/registry.json`, "utf8"));
	const layer = new Map();
	for (const c of registry.components ?? []) {
		if (!c.id.startsWith("src/components/") || !CONTRACT.has(c.name)) continue;
		layer.set(c.name, signature(c));
	}
	perHost.set(host, layer);
}

const names = new Set([...perHost.values()].flatMap((m) => [...m.keys()]));
const base = hosts[0];
let mismatches = 0;

for (const name of [...names].sort()) {
	const baseSig = perHost.get(base).get(name);
	const differing = hosts.filter((h) => perHost.get(h).get(name) !== baseSig);
	if (differing.length === 0) continue;
	mismatches++;
	console.log(`MISMATCH ${name}`);
	for (const host of hosts) {
		console.log(`  ${host.padEnd(14)} ${perHost.get(host).get(name) ?? "(absent)"}`);
	}
	console.log();
}

console.log(`${names.size} components, ${mismatches} mismatching across ${hosts.length} hosts`);
process.exit(mismatches === 0 ? 0 : 1);
