// Discovery cost: how much text an arm has to read to learn the API it needs.
//
// Self-reported tool counts are not comparable across agents, so this measures the corpus
// instead of the agent. It is deterministic, reproducible, and independent of which model
// ran the arm — the same numbers come back on a rerun.
//
//   A2-floor   the 18 files whose components the screen uses, and nothing else. Assumes the
//              agent already knows exactly which files those are, which it does not.
//   A2-search  every file in src/components. What it costs to find the 18 among the rest,
//              which is the actual job once near-miss names exist.
//   B          `component list` once, plus `component inspect` for the 18. What the agent
//              reads to get the same facts from the registry.
//
// Usage: node scripts/cost.mjs [host ...]

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";

// Same contract as build-registry.sh: YOSEGI_BIN points at a local checkout's bin/yosegi.js,
// and unset falls back to the published package so the repository stands alone.
const YOSEGI_BIN = process.env.YOSEGI_BIN ?? null;

// The components the screen actually places. PostBody and ActionButton are rendered
// internally by PostCard and PostActionBar, so a caller never touches them.
const USED = [
	"app-shell#AppShell", "timeline-header#TimelineHeader", "search-field#SearchField",
	"notification-bell#NotificationBell", "user-avatar#UserAvatar", "feed-tabs#FeedTabs",
	"post-composer#PostComposer", "visibility-picker#VisibilityPicker", "post-card#PostCard",
	"post-author-line#PostAuthorLine", "quoted-post#QuotedPost", "post-media#PostMedia",
	"post-action-bar#PostActionBar", "trend-panel#TrendPanel", "trend-item#TrendItem",
	"suggested-user-panel#SuggestedUserPanel", "suggested-user-row#SuggestedUserRow",
	"follow-button#FollowButton",
];

const hosts = process.argv.slice(2);
const kb = (n) => `${(n / 1024).toFixed(1)}KB`;

console.log("host           components  A2-floor  A2-search  B        B/A2-search");

for (const host of hosts) {
	const dir = `hosts/${host}/src/components`;
	if (!existsSync(dir)) continue;

	const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
	const searchBytes = files.reduce((n, f) => n + statSync(`${dir}/${f}`).size, 0);
	const floorBytes = USED.reduce((n, id) => {
		const path = `${dir}/${id.split("#")[0]}.tsx`;
		return n + (existsSync(path) ? statSync(path).size : 0);
	}, 0);

	const ids = USED.map((id) => `src/components/${id}`);
	const run = (args) => {
		const argv = [...args, "--data-dir", ".yosegi", "--quiet"];
		const [cmd, cmdArgs] = YOSEGI_BIN
			? ["node", [YOSEGI_BIN, ...argv]]
			: ["npx", ["--yes", "@yosegi/yosegi", ...argv]];
		return execFileSync(cmd, cmdArgs, { cwd: `hosts/${host}`, encoding: "utf8" });
	};
	const registryBytes =
		Buffer.byteLength(run(["component", "list"])) +
		Buffer.byteLength(run(["component", "inspect", ...ids]));

	console.log(
		`${host.padEnd(14)} ${String(files.length).padStart(10)}  ${kb(floorBytes).padStart(8)}  ` +
			`${kb(searchBytes).padStart(9)}  ${kb(registryBytes).padStart(7)}  ` +
			`${(registryBytes / searchBytes).toFixed(2)}×`,
	);
}
