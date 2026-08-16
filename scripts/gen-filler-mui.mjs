// Emits the product-surface components that bring a MUI bench host up to its target size.
//
// The 20 contract components and the hand-written near-miss families are already in place;
// this fills the remainder with ordinary screens a social product of this size would have.
// Output is deterministic: the same host and target always produce the same files, so a
// regenerated host is byte-identical and the measurement stays reproducible.
//
// Usage: node scripts/gen-filler-mui.mjs hosts/mui-m 80

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [hostDir, targetArg] = process.argv.slice(2);
if (!hostDir || !targetArg) {
	console.error("usage: node scripts/gen-filler-mui.mjs <host-dir> <target-component-count>");
	process.exit(1);
}
const target = Number(targetArg);
const componentsDir = join(hostDir, "src", "components");
if (!existsSync(componentsDir)) {
	console.error(`no such directory: ${componentsDir}`);
	process.exit(1);
}

// ---------------------------------------------------------------------------
// Deterministic randomness. Every choice is keyed off the component name, so a
// component's shape never changes when the target count does.
// ---------------------------------------------------------------------------

function hash(text) {
	let h = 2166136261;
	for (let i = 0; i < text.length; i++) {
		h ^= text.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

function rng(seed) {
	let state = seed >>> 0;
	return () => {
		state = (state + 0x6d2b79f5) >>> 0;
		let t = Math.imul(state ^ (state >>> 15), 1 | state);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// ---------------------------------------------------------------------------
// Names. A domain noun crossed with a UI role, shuffled deterministically so the
// first N of the list is a mixed sample rather than every row component first.
// ---------------------------------------------------------------------------

const ENTITIES = [
	"Notification",
	"Setting",
	"Privacy",
	"Profile",
	"Media",
	"Bookmark",
	"Message",
	"Thread",
	"Hashtag",
	"Mention",
	"Draft",
	"Moderation",
	"Block",
	"Mute",
	"Report",
	"Subscription",
	"Space",
	"Poll",
	"Event",
	"Highlight",
	"Analytics",
	"Archive",
	"Digest",
	"Invite",
	"Verification",
	"Payment",
	"Topic",
	"Language",
	"Session",
	"Device",
	"Keyword",
	"Community",
	"Story",
	"Reaction",
	"Album",
	"Clip",
	"Room",
	"Circle",
	"Label",
	"Collection",
	"Insight",
	"Milestone",
	"Referral",
	"Storage",
	"Security",
	"Recovery",
	"Appeal",
	"Ranking",
	"Discovery",
	"Nearby",
];

const ROLES = [
	"Row",
	"Card",
	"Panel",
	"Banner",
	"Toolbar",
	"EmptyState",
	"Header",
	"Summary",
	"Tile",
	"Section",
	"Callout",
	"Strip",
	"ToggleRow",
	"Viewer",
	"Filter",
	"List",
];

function shuffled(items, seed) {
	const next = rng(seed);
	const out = [...items];
	for (let i = out.length - 1; i > 0; i--) {
		const j = Math.floor(next() * (i + 1));
		[out[i], out[j]] = [out[j], out[i]];
	}
	return out;
}

const catalog = shuffled(
	ENTITIES.flatMap((entity) => ROLES.map((role) => ({ name: `${entity}${role}`, role, entity }))),
	0x5eed,
);

// ---------------------------------------------------------------------------
// Templates. One per role, each with two shapes: props are sometimes a model
// object, sometimes loose scalars; sometimes an enum, sometimes a ReactNode slot.
// ---------------------------------------------------------------------------

const imports = (lines) => `${lines.slice().sort().join("\n")}\n\n`;

const mui = (component, path = component) => `import ${component} from "@mui/material/${path}";`;
const icon = (component, path) => `import ${component} from "@mui/icons-material/${path}";`;

function row(N, v) {
	if (v === 0) {
		return (
			imports([
				mui("Avatar"),
				mui("Box"),
				mui("ListItemButton"),
				mui("Stack"),
				mui("Typography"),
				'import type { ReactNode } from "react";',
			]) +
			`export interface ${N}Item {
	id: string;
	/** Headline of the row. */
	title: string;
	/** Second line, e.g. a handle or a timestamp. */
	detail: string;
	/** Leading image; the row falls back to text alignment without one. */
	avatarUrl?: string;
	/** Draws the row in the unread weight. */
	unread?: boolean;
}

export interface ${N}Props {
	/** The record this row stands for. */
	item: ${N}Item;
	/** Visual weight of the row. */
	emphasis?: "default" | "muted" | "strong";
	/** Drawn at the trailing edge, e.g. an overflow menu. */
	trailing?: ReactNode;
	/** True when this is the active row in its list. */
	selected?: boolean;
	/** Fired with the record id. */
	onSelect?: (id: string) => void;
}

export function ${N}({ item, emphasis = "default", trailing, selected = false, onSelect }: ${N}Props) {
	return (
		<ListItemButton
			selected={selected}
			onClick={onSelect ? () => onSelect(item.id) : undefined}
			sx={{ px: 2, py: 1.25, gap: 1.5, opacity: emphasis === "muted" ? 0.68 : 1 }}
		>
			{item.avatarUrl ? <Avatar src={item.avatarUrl} alt={item.title} sx={{ width: 36, height: 36 }} /> : null}
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Typography variant="body2" noWrap sx={{ fontWeight: emphasis === "strong" || item.unread ? 700 : 500 }}>
					{item.title}
				</Typography>
				<Typography variant="caption" color="text.secondary" component="p" noWrap>
					{item.detail}
				</Typography>
			</Box>
			<Stack direction="row" spacing={0.5} sx={{ alignItems: "center", flexShrink: 0 }}>
				{trailing}
			</Stack>
		</ListItemButton>
	);
}
`
		);
	}
	return (
		imports([
			mui("Avatar"),
			mui("Box"),
			mui("Chip"),
			mui("Stack"),
			mui("Typography"),
			'import type { AuthorModel } from "~/models";',
		]) +
		`export interface ${N}Props {
	/** The account the row is about. */
	author: AuthorModel;
	/** Line under the display name. */
	summary: string;
	/** Pre-formatted timestamp shown at the trailing edge. */
	timestamp?: string;
	/** Small label drawn after the display name. */
	tag?: string;
	/** Tightens the vertical padding. */
	dense?: boolean;
}

export function ${N}({ author, summary, timestamp, tag, dense = false }: ${N}Props) {
	return (
		<Stack direction="row" spacing={1.5} sx={{ px: 2, py: dense ? 0.75 : 1.5, alignItems: "flex-start" }}>
			<Avatar src={author.avatarUrl} alt={author.displayName} sx={{ width: 32, height: 32 }} />
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Stack direction="row" spacing={0.75} sx={{ alignItems: "center", minWidth: 0 }}>
					<Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
						{author.displayName}
					</Typography>
					{tag ? <Chip label={tag} size="small" variant="outlined" sx={{ height: 18, fontSize: 11 }} /> : null}
				</Stack>
				<Typography variant="caption" color="text.secondary" component="p">
					{summary}
				</Typography>
			</Box>
			{timestamp ? (
				<Typography variant="caption" color="text.disabled" sx={{ flexShrink: 0 }}>
					{timestamp}
				</Typography>
			) : null}
		</Stack>
	);
}
`
	);
}

function card(N, v) {
	if (v === 0) {
		return (
			imports([
				mui("Card"),
				mui("CardActionArea"),
				mui("CardContent"),
				mui("Chip"),
				mui("Stack"),
				mui("Typography"),
				'import type { ReactNode } from "react";',
			]) +
			`export interface ${N}Props {
	/** Card title. */
	title: string;
	/** Supporting copy under the title. */
	description?: string;
	/** Palette the card leans on. */
	tone?: "neutral" | "brand" | "warning";
	/** Labels drawn under the description. */
	tags?: string[];
	/** Drawn above the title, e.g. an image or a chart. */
	media?: ReactNode;
	/** Drawn at the bottom edge. */
	footer?: ReactNode;
	onOpen?: () => void;
}

const BORDERS = { neutral: "divider", brand: "primary.main", warning: "warning.main" };

export function ${N}({ title, description, tone = "neutral", tags, media, footer, onOpen }: ${N}Props) {
	const body = (
		<>
			{media}
			<CardContent>
				<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
					{title}
				</Typography>
				{description ? (
					<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
						{description}
					</Typography>
				) : null}
				{tags && tags.length > 0 ? (
					<Stack direction="row" spacing={0.75} sx={{ mt: 1, flexWrap: "wrap", gap: 0.75 }}>
						{tags.map((tag) => (
							<Chip key={tag} label={tag} size="small" variant="outlined" />
						))}
					</Stack>
				) : null}
			</CardContent>
		</>
	);

	return (
		<Card variant="outlined" sx={{ borderRadius: 3, borderColor: BORDERS[tone] }}>
			{onOpen ? <CardActionArea onClick={onOpen}>{body}</CardActionArea> : body}
			{footer}
		</Card>
	);
}
`
		);
	}
	return (
		imports([
			mui("Box"),
			mui("Card"),
			mui("CardContent"),
			mui("Divider"),
			mui("Stack"),
			mui("Typography"),
			'import type { ReactNode } from "react";',
		]) +
		`export interface ${N}Entry {
	id: string;
	/** Text of the entry. */
	label: string;
	/** Right-aligned value, already formatted. */
	value: string;
}

export interface ${N}Props {
	/** Card heading. */
	heading: string;
	/** Rows the card lists. */
	entries: ${N}Entry[];
	/** Drawn to the right of the heading. */
	action?: ReactNode;
	/** Drops the card's border for use inside another surface. */
	flush?: boolean;
}

export function ${N}({ heading, entries, action, flush = false }: ${N}Props) {
	return (
		<Card variant={flush ? "elevation" : "outlined"} elevation={0} sx={{ borderRadius: 3 }}>
			<CardContent>
				<Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
						{heading}
					</Typography>
					{action}
				</Stack>
				<Divider sx={{ my: 1.5 }} />
				<Stack spacing={1}>
					{entries.map((entry) => (
						<Box key={entry.id} sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
							<Typography variant="body2" color="text.secondary" noWrap>
								{entry.label}
							</Typography>
							<Typography variant="body2" sx={{ fontWeight: 600 }}>
								{entry.value}
							</Typography>
						</Box>
					))}
				</Stack>
			</CardContent>
		</Card>
	);
}
`
	);
}

function panel(N, v) {
	const heading = v === 0 ? "string" : "ReactNode";
	const headingNode = v === 0 ? `<Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>\n\t\t\t\t\t{heading}\n\t\t\t\t</Typography>` : "{heading}";
	return (
		imports([mui("Divider"), mui("Paper"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Panel title. */
	heading: ${heading};
	/** Panel contents. */
	children: ReactNode;
	/** Drawn to the right of the heading. */
	actions?: ReactNode;
	/** Drawn under the contents, behind a divider. */
	footer?: ReactNode;
	/** Tightens the padding. */
	dense?: boolean;
}

export function ${N}({ heading, children, actions, footer, dense = false }: ${N}Props) {
	const pad = dense ? 1.25 : 2;
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			<Stack direction="row" spacing={1} sx={{ px: pad, py: 1.25, alignItems: "center", justifyContent: "space-between" }}>
				${headingNode}
				{actions}
			</Stack>
			<Divider />
			<Stack sx={{ px: pad, py: pad }}>{children}</Stack>
			{footer ? (
				<>
					<Divider />
					<Stack sx={{ px: pad, py: 1 }}>{footer}</Stack>
				</>
			) : null}
		</Paper>
	);
}
`
	);
}

function banner(N, v) {
	if (v === 0) {
		return (
			imports([mui("Alert"), mui("AlertTitle"), 'import type { ReactNode } from "react";']) +
			`export interface ${N}Props {
	/** Body copy. */
	message: string;
	/** Bold line above the message. */
	title?: string;
	/** Severity the banner is drawn at. */
	severity?: "info" | "success" | "warning" | "error";
	/** Drawn at the trailing edge, e.g. a button. */
	action?: ReactNode;
	/** Shows a close button when set. */
	onDismiss?: () => void;
}

export function ${N}({ message, title, severity = "info", action, onDismiss }: ${N}Props) {
	return (
		<Alert severity={severity} variant="outlined" action={action} onClose={onDismiss} sx={{ borderRadius: 2 }}>
			{title ? <AlertTitle>{title}</AlertTitle> : null}
			{message}
		</Alert>
	);
}
`
		);
	}
	return (
		imports([mui("Box"), mui("Button"), mui("Paper"), mui("Stack"), mui("Typography")]) +
		`export interface ${N}Props {
	/** Headline. */
	title: string;
	/** Copy under the headline. */
	body: string;
	/** Label of the primary button; the button is hidden without it. */
	actionLabel?: string;
	/** Placement of the banner in the page flow. */
	placement?: "inline" | "top" | "bottom";
	onAction?: () => void;
	onClose?: () => void;
}

export function ${N}({ title, body, actionLabel, placement = "inline", onAction, onClose }: ${N}Props) {
	return (
		<Paper
			variant="outlined"
			sx={{
				borderRadius: placement === "inline" ? 3 : 0,
				p: 2,
				bgcolor: "action.hover",
				borderLeft: 4,
				borderLeftColor: "primary.main",
			}}
		>
			<Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{body}
					</Typography>
				</Box>
				{actionLabel ? (
					<Button size="small" variant="contained" onClick={onAction} sx={{ borderRadius: 999, textTransform: "none" }}>
						{actionLabel}
					</Button>
				) : null}
				{onClose ? (
					<Button size="small" color="inherit" onClick={onClose} sx={{ textTransform: "none" }}>
						Dismiss
					</Button>
				) : null}
			</Stack>
		</Paper>
	);
}
`
	);
}

function toolbar(N, v) {
	const sticky = v === 0;
	return (
		imports([mui("Box"), mui("Divider"), mui("Paper"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Name of the surface the toolbar belongs to. */
	label: string;
	/** Controls at the leading edge. */
	leading?: ReactNode;
	/** Controls at the trailing edge. */
	trailing?: ReactNode;
	/** Tightens the height. */
	dense?: boolean;
	${sticky ? "/** Pins the toolbar to the top of its scroll container. */\n\tsticky?: boolean;" : "/** Draws a divider under the toolbar. */\n\tdivided?: boolean;"}
}

export function ${N}({ label, leading, trailing, dense = false, ${sticky ? "sticky = false" : "divided = true"} }: ${N}Props) {
	return (
		<Paper
			variant="outlined"
			square
			sx={{
				px: 1.5,
				py: dense ? 0.5 : 1,
				${sticky ? 'position: sticky ? "sticky" : "static",\n\t\t\t\ttop: 0,\n\t\t\t\tzIndex: 2,' : "borderBottomWidth: divided ? 1 : 0,"}
				borderRadius: 0,
			}}
		>
			<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
				{leading}
				<Typography variant="subtitle2" sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>
					{label}
				</Typography>
				<Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
				<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>{trailing}</Box>
			</Stack>
		</Paper>
	);
}
`
	);
}

function emptyState(N, v) {
	if (v === 0) {
		return (
			imports([mui("Box"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
			`export interface ${N}Props {
	/** Headline explaining what is missing. */
	title: string;
	/** Copy under the headline. */
	description?: string;
	/** Glyph drawn above the headline. */
	icon?: ReactNode;
	/** Drawn under the copy, e.g. a button. */
	action?: ReactNode;
	/** Overall scale of the block. */
	size?: "sm" | "md" | "lg";
}

const PADDING = { sm: 3, md: 5, lg: 8 };

export function ${N}({ title, description, icon, action, size = "md" }: ${N}Props) {
	return (
		<Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", py: PADDING[size], px: 2 }}>
			{icon ? <Box sx={{ color: "text.disabled", fontSize: 40, lineHeight: 1 }}>{icon}</Box> : null}
			<Typography variant={size === "sm" ? "subtitle1" : "h6"} sx={{ fontWeight: 700 }}>
				{title}
			</Typography>
			{description ? (
				<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
					{description}
				</Typography>
			) : null}
			{action}
		</Stack>
	);
}
`
		);
	}
	return (
		imports([mui("Button"), mui("Paper"), mui("Stack"), mui("Typography")]) +
		`export interface ${N}Props {
	/** Headline explaining what is missing. */
	title: string;
	/** Copy under the headline. */
	description: string;
	/** Label of the recovery button; the button is hidden without it. */
	actionLabel?: string;
	/** Why the surface is empty, which changes the illustration. */
	reason?: "empty" | "filtered" | "error" | "offline";
	onAction?: () => void;
}

const GLYPHS = { empty: "✦", filtered: "⌕", error: "!", offline: "⌁" };

export function ${N}({ title, description, actionLabel, reason = "empty", onAction }: ${N}Props) {
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, py: 5, px: 3, textAlign: "center" }}>
			<Stack spacing={1.5} sx={{ alignItems: "center" }}>
				<Typography component="span" sx={{ fontSize: 32, color: "text.disabled" }} aria-hidden>
					{GLYPHS[reason]}
				</Typography>
				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
					{description}
				</Typography>
				{actionLabel ? (
					<Button variant="outlined" onClick={onAction} sx={{ borderRadius: 999, textTransform: "none" }}>
						{actionLabel}
					</Button>
				) : null}
			</Stack>
		</Paper>
	);
}
`
	);
}

function header(N, v) {
	if (v === 0) {
		return (
			imports([
				mui("Avatar"),
				mui("Box"),
				mui("Divider"),
				mui("Paper"),
				mui("Stack"),
				mui("Typography"),
				'import type { ReactNode } from "react";',
			]) +
			`export interface ${N}Stat {
	label: string;
	value: number;
}

export interface ${N}Props {
	/** Headline of the surface. */
	title: string;
	/** Line under the title. */
	subtitle?: string;
	/** Image drawn at the leading edge. */
	avatarUrl?: string;
	/** Counters drawn under the title. */
	stats?: ${N}Stat[];
	/** Controls drawn at the trailing edge. */
	actions?: ReactNode;
}

export function ${N}({ title, subtitle, avatarUrl, stats, actions }: ${N}Props) {
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
			<Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
				{avatarUrl ? <Avatar src={avatarUrl} alt={title} sx={{ width: 56, height: 56 }} /> : null}
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="h6" sx={{ fontWeight: 700 }} noWrap>
						{title}
					</Typography>
					{subtitle ? (
						<Typography variant="body2" color="text.secondary" noWrap>
							{subtitle}
						</Typography>
					) : null}
				</Box>
				{actions}
			</Stack>
			{stats && stats.length > 0 ? (
				<>
					<Divider sx={{ my: 1.5 }} />
					<Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
						{stats.map((stat) => (
							<Box key={stat.label}>
								<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
									{stat.value.toLocaleString("en-US")}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{stat.label}
								</Typography>
							</Box>
						))}
					</Stack>
				</>
			) : null}
		</Paper>
	);
}
`
		);
	}
	return (
		imports([mui("Box"), mui("Chip"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Headline of the surface. */
	title: string;
	/** Small label drawn after the title. */
	badge?: string;
	/** Copy under the title. */
	description?: ReactNode;
	/** Text alignment of the block. */
	align?: "start" | "center";
	/** Controls drawn at the trailing edge. */
	actions?: ReactNode;
}

export function ${N}({ title, badge, description, align = "start", actions }: ${N}Props) {
	return (
		<Stack
			direction="row"
			spacing={2}
			sx={{ alignItems: "center", justifyContent: align === "center" ? "center" : "space-between", py: 1.5 }}
		>
			<Box sx={{ minWidth: 0, textAlign: align === "center" ? "center" : "left" }}>
				<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
					<Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					{badge ? <Chip label={badge} size="small" color="primary" variant="outlined" /> : null}
				</Stack>
				{description ? (
					<Typography variant="body2" color="text.secondary" component="div">
						{description}
					</Typography>
				) : null}
			</Box>
			{actions}
		</Stack>
	);
}
`
	);
}

function summary(N, v) {
	const withCaption = v === 0;
	return (
		imports([mui("Box"), mui("LinearProgress"), mui("Paper"), mui("Stack"), mui("Typography")]) +
		`export interface ${N}Props {
	/** What is being measured. */
	label: string;
	/** Current amount. */
	value: number;
	/** Amount that counts as full. */
	total: number;
	${withCaption ? "/** Line under the bar. */\n\tcaption?: string;" : "/** Formats the value as a percentage instead of a count. */\n\tasPercent?: boolean;"}
	/** Palette of the bar. */
	color?: "primary" | "success" | "warning" | "error";
}

export function ${N}({ label, value, total, ${withCaption ? "caption" : "asPercent = false"}, color = "primary" }: ${N}Props) {
	const ratio = total === 0 ? 0 : Math.min(100, Math.round((value / total) * 100));
	return (
		<Paper variant="outlined" sx={{ borderRadius: 2, p: 1.5 }}>
			<Stack direction="row" spacing={1} sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{label}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					${withCaption ? "{value.toLocaleString(\"en-US\")} / {total.toLocaleString(\"en-US\")}" : "{asPercent ? `${ratio}%` : value.toLocaleString(\"en-US\")}"}
				</Typography>
			</Stack>
			<Box sx={{ mt: 1 }}>
				<LinearProgress variant="determinate" value={ratio} color={color} sx={{ height: 6, borderRadius: 3 }} />
			</Box>
			${withCaption ? '{caption ? (\n\t\t\t\t<Typography variant="caption" color="text.secondary" sx={{ mt: 0.75, display: "block" }}>\n\t\t\t\t\t{caption}\n\t\t\t\t</Typography>\n\t\t\t) : null}' : ""}
		</Paper>
	);
}
`
	);
}

function tile(N, v) {
	if (v === 0) {
		return (
			imports([
				icon("TrendingDownIcon", "TrendingDown"),
				icon("TrendingFlatIcon", "TrendingFlat"),
				icon("TrendingUpIcon", "TrendingUp"),
				mui("ButtonBase"),
				mui("Paper"),
				mui("Stack"),
				mui("Typography"),
			]) +
			`export interface ${N}Props {
	/** What the number counts. */
	label: string;
	/** The number, already formatted. */
	value: string;
	/** Change against the previous period, in percent. */
	delta?: number;
	/** Direction the change is drawn in. */
	trend?: "up" | "down" | "flat";
	onClick?: () => void;
}

export function ${N}({ label, value, delta, trend = "flat", onClick }: ${N}Props) {
	const arrow =
		trend === "up" ? (
			<TrendingUpIcon fontSize="small" color="success" />
		) : trend === "down" ? (
			<TrendingDownIcon fontSize="small" color="error" />
		) : (
			<TrendingFlatIcon fontSize="small" color="disabled" />
		);

	const body = (
		<Stack spacing={0.5} sx={{ p: 2, width: "100%", alignItems: "flex-start" }}>
			<Typography variant="caption" color="text.secondary">
				{label}
			</Typography>
			<Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
				{value}
			</Typography>
			{delta === undefined ? null : (
				<Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
					{arrow}
					<Typography variant="caption" color="text.secondary">
						{delta > 0 ? "+" : ""}
						{delta}%
					</Typography>
				</Stack>
			)}
		</Stack>
	);

	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			{onClick ? <ButtonBase onClick={onClick} sx={{ width: "100%", textAlign: "left" }}>{body}</ButtonBase> : body}
		</Paper>
	);
}
`
		);
	}
	return (
		imports([mui("Box"), mui("Paper"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Caption under the value. */
	label: string;
	/** The value, already formatted. */
	value: string;
	/** Glyph drawn at the leading edge. */
	icon?: ReactNode;
	/** Surface treatment of the tile. */
	variant?: "plain" | "filled" | "outlined";
	/** Stretches the tile to fill its grid cell. */
	fullHeight?: boolean;
}

export function ${N}({ label, value, icon, variant = "outlined", fullHeight = false }: ${N}Props) {
	return (
		<Paper
			variant={variant === "outlined" ? "outlined" : "elevation"}
			elevation={variant === "filled" ? 1 : 0}
			sx={{
				borderRadius: 3,
				p: 2,
				height: fullHeight ? "100%" : "auto",
				bgcolor: variant === "filled" ? "action.hover" : "background.paper",
			}}
		>
			<Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
				{icon ? <Box sx={{ color: "primary.main", display: "flex" }}>{icon}</Box> : null}
				<Box sx={{ minWidth: 0 }}>
					<Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }} noWrap>
						{value}
					</Typography>
					<Typography variant="caption" color="text.secondary" noWrap component="p">
						{label}
					</Typography>
				</Box>
			</Stack>
		</Paper>
	);
}
`
	);
}

function section(N, v) {
	const divided = v === 0;
	return (
		imports([mui("Box"), mui("Divider"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Section title. */
	heading: ReactNode;
	/** Section contents. */
	children: ReactNode;
	/** Copy under the heading. */
	description?: string;
	${divided ? "/** Draws a rule under the heading. */\n\tdivided?: boolean;" : '/** Vertical rhythm between the heading and the contents. */\n\tspacing?: "tight" | "normal" | "loose";'}
}

${divided ? "" : "const GAPS = { tight: 1, normal: 2, loose: 3 };\n\n"}export function ${N}({ heading, children, description, ${divided ? "divided = true" : 'spacing = "normal"'} }: ${N}Props) {
	return (
		<Box component="section" sx={{ py: 2 }}>
			<Stack spacing={0.5}>
				<Typography variant="subtitle1" component="h2" sx={{ fontWeight: 700 }}>
					{heading}
				</Typography>
				{description ? (
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				) : null}
			</Stack>
			${divided ? "{divided ? <Divider sx={{ my: 1.5 }} /> : <Box sx={{ height: 12 }} />}" : "<Box sx={{ height: GAPS[spacing] * 8 }} />"}
			{children}
		</Box>
	);
}
`
	);
}

function callout(N, v) {
	const withAction = v === 0;
	return (
		imports([mui("Box"), mui("Paper"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Headline. */
	title: string;
	/** Copy under the headline. */
	body: string;
	/** Colour the callout is drawn in. */
	tone?: "info" | "tip" | "warning";
	${withAction ? "/** Drawn at the trailing edge, e.g. a link. */\n\taction?: ReactNode;" : "/** Removes the padding for use inside a dense list. */\n\tcompact?: boolean;"}
}

const TONES = { info: "info.main", tip: "success.main", warning: "warning.main" };

export function ${N}({ title, body, tone = "info", ${withAction ? "action" : "compact = false"} }: ${N}Props) {
	return (
		<Paper
			variant="outlined"
			sx={{ borderRadius: 2, p: ${withAction ? "2" : "compact ? 1 : 2"}, borderLeft: 4, borderLeftColor: TONES[tone] }}
		>
			<Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{body}
					</Typography>
				</Box>
				${withAction ? "{action}" : ""}
			</Stack>
		</Paper>
	);
}
`
	);
}

function strip(N, v) {
	if (v === 0) {
		return (
			imports([mui("Box"), mui("Chip"), mui("Stack")]) +
			`export interface ${N}Item {
	id: string;
	label: string;
	/** Count drawn after the label. */
	count?: number;
}

export interface ${N}Props {
	/** The chips to draw. */
	items: ${N}Item[];
	/** Ids currently switched on. */
	selectedIds?: string[];
	/** Fired with the id that was clicked. */
	onToggle?: (id: string) => void;
	/** MUI chip scale. */
	size?: "small" | "medium";
	/** Lets the strip wrap instead of scrolling sideways. */
	wrap?: boolean;
}

export function ${N}({ items, selectedIds = [], onToggle, size = "small", wrap = true }: ${N}Props) {
	return (
		<Box sx={{ overflowX: wrap ? "visible" : "auto", py: 0.5 }}>
			<Stack direction="row" spacing={0.75} sx={{ flexWrap: wrap ? "wrap" : "nowrap", gap: 0.75 }}>
				{items.map((item) => {
					const on = selectedIds.includes(item.id);
					return (
						<Chip
							key={item.id}
							label={item.count === undefined ? item.label : item.label + " · " + item.count}
							size={size}
							color={on ? "primary" : "default"}
							variant={on ? "filled" : "outlined"}
							clickable={onToggle !== undefined}
							onClick={onToggle ? () => onToggle(item.id) : undefined}
						/>
					);
				})}
			</Stack>
		</Box>
	);
}
`
		);
	}
	return (
		imports([mui("Chip"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Chip labels, in display order. */
	labels: string[];
	/** Text drawn before the chips. */
	caption?: string;
	/** Chips shown before the overflow counter. */
	max?: number;
	/** Drawn after the chips. */
	trailing?: ReactNode;
	/** Colour applied to every chip. */
	color?: "default" | "primary" | "secondary";
}

export function ${N}({ labels, caption, max = 6, trailing, color = "default" }: ${N}Props) {
	const shown = labels.slice(0, max);
	const hidden = labels.length - shown.length;
	return (
		<Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", gap: 0.75 }}>
			{caption ? (
				<Typography variant="caption" color="text.secondary">
					{caption}
				</Typography>
			) : null}
			{shown.map((label) => (
				<Chip key={label} label={label} size="small" color={color} variant="outlined" />
			))}
			{hidden > 0 ? <Chip label={"+" + hidden} size="small" variant="filled" /> : null}
			{trailing}
		</Stack>
	);
}
`
	);
}

function toggleRow(N, v) {
	if (v === 0) {
		return (
			imports([mui("Box"), mui("Stack"), mui("Switch"), mui("Typography")]) +
			`export interface ${N}Props {
	/** Name of the setting. */
	label: string;
	/** Explanation under the label. */
	description?: string;
	/** Current state. */
	checked: boolean;
	/** Fired with the state the switch is moving to. */
	onCheckedChange: (checked: boolean) => void;
	/** Greys the row out and blocks the switch. */
	disabled?: boolean;
}

export function ${N}({ label, description, checked, onCheckedChange, disabled = false }: ${N}Props) {
	return (
		<Stack
			direction="row"
			spacing={2}
			sx={{ px: 2, py: 1.5, alignItems: "center", opacity: disabled ? 0.6 : 1 }}
		>
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{label}
				</Typography>
				{description ? (
					<Typography variant="caption" color="text.secondary" component="p">
						{description}
					</Typography>
				) : null}
			</Box>
			<Switch
				checked={checked}
				disabled={disabled}
				slotProps={{ input: { "aria-label": label } }}
				onChange={(event) => onCheckedChange(event.target.checked)}
			/>
		</Stack>
	);
}
`
		);
	}
	return (
		imports([mui("Box"), mui("Stack"), mui("Switch"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Setting {
	id: string;
	label: string;
	/** Explanation under the label. */
	hint?: string;
	enabled: boolean;
}

export interface ${N}Props {
	/** The setting this row edits. */
	setting: ${N}Setting;
	/** Fired with the setting id and the state it is moving to. */
	onChange: (id: string, enabled: boolean) => void;
	/** Drawn between the text and the switch. */
	trailing?: ReactNode;
	/** Tightens the vertical padding. */
	dense?: boolean;
}

export function ${N}({ setting, onChange, trailing, dense = false }: ${N}Props) {
	return (
		<Stack direction="row" spacing={2} sx={{ px: 2, py: dense ? 1 : 1.75, alignItems: "center" }}>
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{setting.label}
				</Typography>
				{setting.hint ? (
					<Typography variant="caption" color="text.secondary" component="p">
						{setting.hint}
					</Typography>
				) : null}
			</Box>
			{trailing}
			<Switch
				size="small"
				checked={setting.enabled}
				slotProps={{ input: { "aria-label": setting.label } }}
				onChange={(event) => onChange(setting.id, event.target.checked)}
			/>
		</Stack>
	);
}
`
	);
}

function viewer(N, v) {
	if (v === 0) {
		return (
			imports([
				icon("ChevronLeftIcon", "ChevronLeft"),
				icon("ChevronRightIcon", "ChevronRight"),
				mui("Box"),
				mui("IconButton"),
				mui("Stack"),
				mui("Typography"),
			]) +
			`export interface ${N}Frame {
	url: string;
	alt: string;
	/** Drawn under the frame when set. */
	caption?: string;
}

export interface ${N}Props {
	/** Frames to page through. */
	frames: ${N}Frame[];
	/** Index of the visible frame; the viewer is controlled. */
	index: number;
	/** Fired with the index to move to. */
	onIndexChange: (index: number) => void;
	/** Aspect ratio the frame is cropped to. */
	ratio?: "square" | "wide" | "tall";
}

const RATIOS = { square: "1 / 1", wide: "16 / 9", tall: "4 / 5" };

export function ${N}({ frames, index, onIndexChange, ratio = "wide" }: ${N}Props) {
	const frame = frames[index];
	if (!frame) {
		return null;
	}
	return (
		<Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", bgcolor: "common.black" }}>
			<Box
				component="img"
				src={frame.url}
				alt={frame.alt}
				sx={{ display: "block", width: "100%", aspectRatio: RATIOS[ratio], objectFit: "contain" }}
			/>
			<Stack
				direction="row"
				sx={{
					position: "absolute",
					inset: 0,
					alignItems: "center",
					justifyContent: "space-between",
					px: 1,
					pointerEvents: "none",
				}}
			>
				<IconButton
					aria-label="Previous"
					disabled={index === 0}
					onClick={() => onIndexChange(index - 1)}
					sx={{ pointerEvents: "auto", bgcolor: "rgba(0,0,0,0.45)", color: "common.white" }}
				>
					<ChevronLeftIcon />
				</IconButton>
				<IconButton
					aria-label="Next"
					disabled={index === frames.length - 1}
					onClick={() => onIndexChange(index + 1)}
					sx={{ pointerEvents: "auto", bgcolor: "rgba(0,0,0,0.45)", color: "common.white" }}
				>
					<ChevronRightIcon />
				</IconButton>
			</Stack>
			{frame.caption ? (
				<Typography variant="caption" sx={{ position: "absolute", bottom: 8, left: 12, color: "common.white" }}>
					{frame.caption}
				</Typography>
			) : null}
		</Box>
	);
}
`
		);
	}
	return (
		imports([mui("Box"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Image URLs laid out in a grid. */
	urls: string[];
	/** Alt text applied to every image; the grid is decorative otherwise. */
	altPrefix: string;
	/** Images per row. */
	columns?: 1 | 2 | 3;
	/** Drawn over the grid, e.g. a close button. */
	overlay?: ReactNode;
	/** Fired with the index that was clicked. */
	onFrameSelect?: (index: number) => void;
}

export function ${N}({ urls, altPrefix, columns = 2, overlay, onFrameSelect }: ${N}Props) {
	return (
		<Box sx={{ position: "relative" }}>
			<Box sx={{ display: "grid", gridTemplateColumns: "repeat(" + columns + ", minmax(0, 1fr))", gap: 1 }}>
				{urls.map((url, position) => (
					<Box
						key={url}
						component="img"
						src={url}
						alt={altPrefix + " " + (position + 1)}
						onClick={onFrameSelect ? () => onFrameSelect(position) : undefined}
						sx={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 2, cursor: "pointer" }}
					/>
				))}
			</Box>
			{overlay ? <Stack sx={{ position: "absolute", top: 8, right: 8 }}>{overlay}</Stack> : null}
			{urls.length === 0 ? (
				<Typography variant="body2" color="text.secondary">
					Nothing here yet
				</Typography>
			) : null}
		</Box>
	);
}
`
	);
}

function filter(N, v) {
	if (v === 0) {
		return (
			imports([
				mui("MenuItem"),
				mui("Select", "Select"),
				mui("Stack"),
				mui("Typography"),
				'import type { SelectChangeEvent } from "@mui/material/Select";',
			]) +
			`export interface ${N}Option {
	value: string;
	label: string;
}

export interface ${N}Props {
	/** Label drawn before the control. */
	label: string;
	/** The selected option value. */
	value: string;
	/** Options to choose from. */
	options: ${N}Option[];
	/** Fired with the option value that was picked. */
	onValueChange: (value: string) => void;
	/** MUI control scale. */
	size?: "small" | "medium";
}

export function ${N}({ label, value, options, onValueChange, size = "small" }: ${N}Props) {
	return (
		<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
			<Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
				{label}
			</Typography>
			<Select<string>
				value={value}
				size={size}
				aria-label={label}
				onChange={(event: SelectChangeEvent<string>) => onValueChange(event.target.value)}
				sx={{ minWidth: 140, borderRadius: 2 }}
			>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</Stack>
	);
}
`
		);
	}
	return (
		imports([mui("Button"), mui("Chip"), mui("Divider"), mui("Stack"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** Filters that are switched on, in display order. */
	activeLabels: string[];
	/** Fired with the label that was removed. */
	onRemove: (label: string) => void;
	/** Clears every filter; the button is hidden without it. */
	onClearAll?: () => void;
	/** Drawn before the chips, e.g. an "add filter" button. */
	leading?: ReactNode;
	/** How the row wraps when it runs out of width. */
	overflow?: "wrap" | "scroll";
}

export function ${N}({ activeLabels, onRemove, onClearAll, leading, overflow = "wrap" }: ${N}Props) {
	return (
		<Stack
			direction="row"
			spacing={0.75}
			divider={<Divider orientation="vertical" flexItem />}
			sx={{
				alignItems: "center",
				flexWrap: overflow === "wrap" ? "wrap" : "nowrap",
				overflowX: overflow === "scroll" ? "auto" : "visible",
				gap: 0.75,
				py: 0.5,
			}}
		>
			{leading}
			{activeLabels.map((label) => (
				<Chip key={label} label={label} size="small" onDelete={() => onRemove(label)} />
			))}
			{onClearAll && activeLabels.length > 0 ? (
				<Button size="small" color="inherit" onClick={onClearAll} sx={{ textTransform: "none" }}>
					Clear
				</Button>
			) : null}
		</Stack>
	);
}
`
	);
}

function list(N, v) {
	if (v === 0) {
		return (
			imports([
				mui("Card"),
				mui("Divider"),
				mui("ListItemButton"),
				mui("ListItemText"),
				mui("Stack"),
				mui("Typography"),
				'import type { ReactNode } from "react";',
			]) +
			`export interface ${N}Entry {
	id: string;
	/** First line. */
	primary: string;
	/** Second line. */
	secondary?: string;
}

export interface ${N}Props {
	/** Title above the list. */
	title: string;
	/** Rows to draw. */
	entries: ${N}Entry[];
	/** Fired with the id of the row that was clicked. */
	onEntrySelect?: (id: string) => void;
	/** Drawn under the last row. */
	footer?: ReactNode;
	/** Copy shown when there are no rows. */
	emptyLabel?: string;
}

export function ${N}({ title, entries, onEntrySelect, footer, emptyLabel = "Nothing here yet" }: ${N}Props) {
	return (
		<Card variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			<Typography variant="subtitle1" sx={{ px: 2, py: 1.25, fontWeight: 700 }}>
				{title}
			</Typography>
			<Divider />
			{entries.length === 0 ? (
				<Typography variant="body2" color="text.secondary" sx={{ px: 2, py: 3, textAlign: "center" }}>
					{emptyLabel}
				</Typography>
			) : (
				<Stack divider={<Divider flexItem />}>
					{entries.map((entry) => (
						<ListItemButton
							key={entry.id}
							onClick={onEntrySelect ? () => onEntrySelect(entry.id) : undefined}
						>
							<ListItemText primary={entry.primary} secondary={entry.secondary} />
						</ListItemButton>
					))}
				</Stack>
			)}
			{footer ? (
				<>
					<Divider />
					{footer}
				</>
			) : null}
		</Card>
	);
}
`
		);
	}
	return (
		imports([mui("Box"), mui("Divider"), mui("Stack"), mui("Typography"), 'import type { ReactNode } from "react";']) +
		`export interface ${N}Props {
	/** The rows, already rendered by the caller. */
	children: ReactNode;
	/** Title above the rows; omit for an unlabelled list. */
	title?: string;
	/** Draws a rule between rows. */
	divided?: boolean;
	/** Vertical padding of the block. */
	padding?: "none" | "sm" | "md";
	/** Drawn to the right of the title. */
	action?: ReactNode;
}

const PADDING = { none: 0, sm: 1, md: 2 };

export function ${N}({ children, title, divided = true, padding = "sm", action }: ${N}Props) {
	return (
		<Box sx={{ py: PADDING[padding] }}>
			{title ? (
				<Stack direction="row" spacing={1} sx={{ px: 2, pb: 1, alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="overline" color="text.secondary">
						{title}
					</Typography>
					{action}
				</Stack>
			) : null}
			<Stack divider={divided ? <Divider flexItem /> : undefined}>{children}</Stack>
		</Box>
	);
}
`
	);
}

const TEMPLATES = {
	Row: row,
	Card: card,
	Panel: panel,
	Banner: banner,
	Toolbar: toolbar,
	EmptyState: emptyState,
	Header: header,
	Summary: summary,
	Tile: tile,
	Section: section,
	Callout: callout,
	Strip: strip,
	ToggleRow: toggleRow,
	Viewer: viewer,
	Filter: filter,
	List: list,
};

// ---------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------

const existingFiles = readdirSync(componentsDir).filter((file) => file.endsWith(".tsx"));
const taken = new Set(existingFiles.map((file) => file.replace(/\.tsx$/, "")));
for (const file of existingFiles) {
	const source = readFileSync(join(componentsDir, file), "utf8");
	for (const match of source.matchAll(/export (?:function|interface) (\w+)/g)) {
		taken.add(kebab(match[1]));
	}
}

const needed = target - existingFiles.length;
if (needed < 0) {
	console.error(`${componentsDir} already has ${existingFiles.length} components, more than the target ${target}`);
	process.exit(1);
}

let written = 0;
for (const candidate of catalog) {
	if (written === needed) break;
	const file = kebab(candidate.name);
	if (taken.has(file)) continue;
	taken.add(file);
	const seed = hash(candidate.name);
	const variant = rng(seed)() < 0.5 ? 0 : 1;
	writeFileSync(join(componentsDir, `${file}.tsx`), TEMPLATES[candidate.role](candidate.name, variant));
	written++;
}

if (written < needed) {
	console.error(`ran out of names: wrote ${written} of ${needed}`);
	process.exit(1);
}

console.log(`${hostDir}: wrote ${written} components, ${existingFiles.length + written} total`);
