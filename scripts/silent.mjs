// Mistakes that compile and are still wrong.
//
// Two hard-won rules, both from the red-team pass:
//
// 1. Silent errors are gated on a clean typecheck. The class is defined as "compiles and is
//    still wrong" (MEASURE.md), so a file with type errors gets N/A here — its mistakes are
//    loud, not silent. The earlier version scored A1 files that do not compile and, worse,
//    only matched object-literal syntax (`visibility: "x"`), so JSX-attribute files
//    (`visibility="x"`) failed every check they actually satisfied. 12 published cells were
//    wrong because of that.
// 2. Every content check matches both syntaxes: `name: value` in a fixture and
//    `name={value}` / `name="value"` as a JSX attribute, and a slot filled either as an
//    attribute (`quoted={...}`) or as a rendered child (`<QuotedPost`).
//
// Cardinality is still not checked (a single PostCard would pass); treat these as
// necessary, not sufficient, and pair them with the render check.
//
// Usage: node scripts/silent.mjs [host ...]   (ARMS=A1,A2,B env to pick arms)

import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const ARMS = process.env.ARMS ? process.env.ARMS.split(",") : ["A1", "A2", "B"];
const HOSTS = process.argv.slice(2).length
	? process.argv.slice(2)
	: ["shadcn", "mui", "chakra", "mantine"];

// Components a caller can place. PostBody and ActionButton stay excluded: PostCard and
// PostActionBar render them internally, so the story never touches them. (SPEC-SCREEN.md
// draws them anyway — a spec defect; every arm correctly left them out.)
const COMPONENTS = [
	"AppShell", "TimelineHeader", "SearchField", "NotificationBell", "UserAvatar",
	"FeedTabs", "PostComposer", "VisibilityPicker", "PostCard", "PostAuthorLine",
	"QuotedPost", "PostMedia", "PostActionBar",
	"TrendPanel", "TrendItem", "SuggestedUserPanel", "SuggestedUserRow", "FollowButton",
];

const EXPECTED = {
	visibilities: ["public", "followers", "public", "circle"],
	activeFeed: "for-you",
	post1: { replyCount: 12, repostCount: 48, likeCount: 310 },
};

// The host's PostAuthorLine either prepends "@" to the handle (shadcn, chakra, mantine) or
// renders it raw (mui). The spec shows "@rin" on screen, so the correct data depends on the
// host: "rin" where the component adds the "@", "@rin" where it does not. A mismatch renders
// as "@@rin" or as a bare "rin" — compiles either way, wrong either way. This is exactly the
// kind of convention the types cannot carry, so it gets its own check.
const HOST_PREPENDS_AT = { shadcn: true, chakra: true, mantine: true, mui: false };

const hostKey = (host) => host.replace(/-(m|l)$/, "");

// name: "value"  |  name="value"  |  name={"value"}
const propValues = (src, name) =>
	[...src.matchAll(new RegExp(`${name}(?::\\s*|=\\{?)"([^"]+)"`, "g"))].map((m) => m[1]);

const hasNumberProp = (src, name, value) =>
	new RegExp(`${name}(?::\\s*|=\\{)${value}\\b`).test(src);

export function check(src, host) {
	const findings = [];

	const rendered = (c) =>
		new RegExp(`<${c}[\\s/>]`).test(src) || new RegExp(`component:\\s*${c}\\b`).test(src);
	const missing = COMPONENTS.filter((c) => !rendered(c));
	if (missing.length) findings.push(`dropped-component: ${missing.join(",")}`);

	const seen = propValues(src, "visibility").filter((v) =>
		["public", "followers", "circle", "unlisted"].includes(v),
	);
	// The composer also carries visibility "public"; require the post multiset, not order.
	const wrong = EXPECTED.visibilities.filter((v) => {
		const i = seen.indexOf(v);
		if (i === -1) return true;
		seen.splice(i, 1);
		return false;
	});
	if (wrong.length) findings.push(`wrong-enum: post visibilities missing ${wrong.join(",")}`);

	const quoted = /\bquoted=\{/.test(src) || /<QuotedPost[\s/>]/.test(src);
	const media = /\bmedia=\{/.test(src) || /<PostMedia[\s/>]/.test(src);
	if (!quoted) findings.push("missing-slot: no quoted post");
	if (!media) findings.push("missing-slot: no post media");

	for (const [field, value] of Object.entries(EXPECTED.post1)) {
		if (!hasNumberProp(src, field, value)) {
			findings.push(`wrong-semantics: post#1 ${field} != ${value}`);
		}
	}
	if (!/likedByViewer(?::\s*|=\{)true\b/.test(src) && !/\bliked\b(?!ByViewer)/.test(src)) {
		findings.push("wrong-semantics: post#1 not liked");
	}

	const feedOk =
		new RegExp(`(?:activeFeed|value)=\\{?["']${EXPECTED.activeFeed}["']`).test(src) ||
		new RegExp(`useState<[^>]*>\\(["']${EXPECTED.activeFeed}["']\\)`).test(src);
	if (!feedOk) findings.push(`wrong-semantics: activeFeed != ${EXPECTED.activeFeed}`);

	const prepends = HOST_PREPENDS_AT[hostKey(host)];
	const handles = propValues(src, "handle");
	if (handles.length) {
		const bad = prepends
			? handles.filter((h) => h.startsWith("@"))
			: handles.filter((h) => !h.startsWith("@"));
		if (bad.length) {
			findings.push(
				`wrong-render: handle ${prepends ? "double @" : "missing @"} ("${bad[0]}", ${bad.length}×)`,
			);
		}
	}

	return findings;
}

// Gate: a file that does not typecheck gets N/A, not a silent score.
function typeErrors(host, file) {
	const root = new URL("..", import.meta.url).pathname;
	const raw = execFileSync(
		"bash",
		[
			"-c",
			`scoredir="${root}hosts/${host}/src/__score__"
			rm -rf "$scoredir"; mkdir -p "$scoredir"
			cp "${file}" "$scoredir/"
			"${root}node_modules/.bin/tsc" --noEmit -p "${root}hosts/${host}" || true
			rm -rf "$scoredir"`,
		],
		{ encoding: "utf8" },
	);
	const base = file.split("/").pop();
	return raw.split("\n").filter((l) => l.includes("error TS") && l.includes(base)).length;
}

const RESULTS_DIR = process.env.RESULTS_DIR ?? "results";

for (const host of HOSTS) {
	for (const arm of ARMS) {
		const path = `${RESULTS_DIR}/${host}/${arm}/TimelineScreen.stories.tsx`;
		if (!existsSync(path)) continue;
		const src = readFileSync(path, "utf8");
		const gate = typeErrors(host, path);
		if (gate > 0) {
			console.log(
				`${host.padEnd(10)} ${arm.padEnd(3)} N/A (${gate} type errors — nothing here is silent)`,
			);
			continue;
		}
		const findings = check(src, host);
		console.log(
			`${host.padEnd(10)} ${arm.padEnd(3)} ${String(findings.length).padStart(2)}  ${findings[0] ?? ""}`,
		);
		for (const f of findings.slice(1)) console.log(`${" ".repeat(18)}${f}`);
	}
}
