// Emits the product surface that surrounds the contract components in the M and L
// shadcn hosts. The catalogue below is fixed and ordered, so `<host> 40` is a prefix of
// `<host> 200`: the M host's extra components are exactly the first 40 of the L host's,
// which keeps the two sizes comparable rather than independently sampled.
//
// Usage: node scripts/gen-filler-shadcn.mjs hosts/shadcn-m 40

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [target, countArg] = process.argv.slice(2);
if (!target || !countArg) {
	console.error("usage: node scripts/gen-filler-shadcn.mjs <host-dir> <count>");
	process.exit(1);
}
const count = Number(countArg);

// Names already taken by the contract layer and by the near-miss families that are
// written by hand. Emitting one of these would silently overwrite a real component.
const RESERVED = new Set([
	"ActionButton",
	"ActionButtonGroup",
	"ActionButtonLegacy",
	"AppShell",
	"AvatarStack",
	"FeedSegmentedControl",
	"FeedTabs",
	"FeedTabsLegacy",
	"FollowButton",
	"IconActionButton",
	"LegacyPostCard",
	"NotificationBell",
	"PostActionBar",
	"PostAuthorLine",
	"PostBody",
	"PostCard",
	"PostCardCompact",
	"PostCardMedia",
	"PostCardSkeleton",
	"PostComposer",
	"PostComposerCompact",
	"PostMedia",
	"QuotedPost",
	"ReplyComposer",
	"SearchBar",
	"SearchField",
	"SearchFieldCompact",
	"SuggestedUserGrid",
	"SuggestedUserPanel",
	"SuggestedUserPanelLegacy",
	"SuggestedUserRow",
	"TimelineHeader",
	"TrendBoard",
	"TrendItem",
	"TrendPanel",
	"TrendPanelCompact",
	"UserAvatar",
	"UserAvatarGroup",
	"UserAvatarLegacy",
	"VisibilityPicker",
]);

const CATALOGUE = {
	row: {
		suffix: "Row",
		nouns: [
			"Notification",
			"Setting",
			"Bookmark",
			"Mention",
			"Follower",
			"Blocked",
			"Muted",
			"Device",
			"Session",
			"Language",
			"Privacy",
			"Draft",
			"Scheduled",
			"Message",
			"Thread",
			"Topic",
			"Community",
			"Space",
			"Poll",
			"Report",
			"Moderation",
			"Payment",
			"Subscription",
			"Highlight",
			"Pin",
			"Archive",
			"Label",
			"Keyword",
			"Contact",
			"Invite",
			"Request",
			"Backup",
			"Export",
			"Webhook",
			"Billing",
			"Receipt",
			"Security",
			"Theme",
		],
	},
	card: {
		suffix: "Card",
		nouns: [
			"Profile",
			"List",
			"Space",
			"Community",
			"Event",
			"Poll",
			"Album",
			"Story",
			"Article",
			"Podcast",
			"Video",
			"Gallery",
			"Topic",
			"Moment",
			"Playlist",
			"Collection",
			"Digest",
			"Recommendation",
			"Achievement",
			"Milestone",
			"Team",
			"Workspace",
			"Invite",
		],
	},
	panel: {
		suffix: "Panel",
		nouns: [
			"Activity",
			"Moderation",
			"Privacy",
			"Account",
			"Analytics",
			"Insight",
			"Engagement",
			"Audience",
			"Reach",
			"Schedule",
			"Storage",
			"Retention",
			"Growth",
			"Safety",
			"Appeal",
		],
	},
	emptyState: {
		suffix: "EmptyState",
		nouns: [
			"Feed",
			"Search",
			"Notification",
			"Bookmark",
			"Message",
			"Follower",
			"Media",
			"List",
			"Thread",
			"Mention",
			"Archive",
			"Draft",
			"Space",
			"Poll",
		],
	},
	header: {
		suffix: "Header",
		nouns: [
			"Profile",
			"Thread",
			"List",
			"Space",
			"Community",
			"Topic",
			"Album",
			"Settings",
			"Feed",
		],
	},
	toolbar: {
		suffix: "Toolbar",
		nouns: ["Composer", "Media", "Moderation", "Gallery", "Thread", "Selection", "Draft"],
	},
	banner: {
		suffix: "Banner",
		nouns: [
			"Announcement",
			"Upgrade",
			"Outage",
			"Verification",
			"Consent",
			"Onboarding",
			"Storage",
		],
	},
	tile: {
		suffix: "Tile",
		nouns: ["Impression", "Engagement", "Follower", "Reach", "Profile", "Post", "Retention"],
	},
	dialog: {
		suffix: "Dialog",
		nouns: ["Report", "Block", "Mute", "Delete", "Share", "Logout", "Archive"],
	},
	menu: {
		suffix: "Menu",
		nouns: ["Post", "Profile", "Thread", "Media", "Sort", "Filter", "Notification", "Account"],
	},
	chip: {
		suffix: "Chip",
		nouns: ["Topic", "Language", "Interest", "Keyword", "Location", "Media", "Audience"],
	},
	preview: {
		suffix: "Preview",
		nouns: ["Link", "Image", "Video", "Audio", "Poll", "Location", "Article", "Space"],
	},
	summary: {
		suffix: "Summary",
		nouns: ["Post", "Profile", "Thread", "Activity", "Engagement", "Audience"],
	},
	section: {
		suffix: "Section",
		nouns: [
			"Settings",
			"Profile",
			"Notification",
			"Privacy",
			"About",
			"Security",
			"Display",
			"Accessibility",
			"Language",
		],
	},
	list: {
		suffix: "List",
		nouns: [
			"Follower",
			"Mention",
			"Bookmark",
			"Notification",
			"Message",
			"Trend",
			"Topic",
			"Media",
			"Device",
		],
	},
	sheet: {
		suffix: "Sheet",
		nouns: ["Share", "Filter", "Compose", "Media", "Report", "Language"],
	},
	badge: {
		suffix: "Badge",
		nouns: ["Verification", "Visibility", "Membership", "Streak", "Moderation"],
	},
	bar: {
		suffix: "Bar",
		nouns: ["UploadProgress", "CharacterCount", "ReadingProgress", "PollResult", "StorageUsage"],
	},
	group: {
		suffix: "Group",
		nouns: ["Reaction", "FilterChip", "MediaThumbnail", "Tag", "Highlight"],
	},
	viewer: {
		suffix: "Viewer",
		nouns: ["Media", "Image", "Video", "Audio", "Album"],
	},
};

// Round-robin across the kinds so any prefix of the catalogue spans the whole range of
// shapes. Taking the first 40 in catalogue order would otherwise hand the M host nothing
// but rows.
function flatten() {
	const kinds = Object.keys(CATALOGUE);
	const cursors = new Map(kinds.map((kind) => [kind, 0]));
	const out = [];
	let exhausted = false;
	while (!exhausted) {
		exhausted = true;
		for (const kind of kinds) {
			const { suffix, nouns } = CATALOGUE[kind];
			const at = cursors.get(kind);
			if (at >= nouns.length) continue;
			exhausted = false;
			cursors.set(kind, at + 1);
			out.push({ kind, noun: nouns[at], name: nouns[at] + suffix });
		}
	}
	return out;
}

// Keyed by the leading noun rather than by the component, so every Bookmark* component
// carries the same glyph. Picking from a hash of the name instead lands a repost arrow on
// an audience panel, which no reviewer would have let through.
const NOUN_ICONS = {
	About: "Info",
	Accessibility: "Eye",
	Account: "User",
	Achievement: "Award",
	Activity: "Activity",
	Album: "Images",
	Analytics: "BarChart3",
	Announcement: "Megaphone",
	Appeal: "Shield",
	Archive: "Archive",
	Article: "FileText",
	Audience: "Users",
	Audio: "Volume2",
	Backup: "HardDrive",
	Billing: "CreditCard",
	Block: "Ban",
	Blocked: "Ban",
	Bookmark: "Bookmark",
	CharacterCount: "Type",
	Collection: "FolderOpen",
	Community: "Users",
	Composer: "PenLine",
	Consent: "Shield",
	Contact: "User",
	Delete: "Trash2",
	Device: "Smartphone",
	Digest: "Newspaper",
	Display: "Palette",
	Draft: "FileText",
	Engagement: "Heart",
	Event: "Calendar",
	Export: "Download",
	Feed: "Rss",
	Filter: "Filter",
	FilterChip: "Filter",
	Follower: "Users",
	Gallery: "Images",
	Growth: "TrendingUp",
	Highlight: "Sparkles",
	Image: "Image",
	Impression: "Eye",
	Insight: "Lightbulb",
	Interest: "Sparkles",
	Invite: "UserPlus",
	Keyword: "Search",
	Label: "Tag",
	Language: "Languages",
	Link: "Link2",
	List: "List",
	Location: "MapPin",
	Logout: "LogOut",
	Media: "Images",
	MediaThumbnail: "Images",
	Membership: "Users",
	Mention: "AtSign",
	Message: "MessageCircle",
	Milestone: "Flag",
	Moderation: "Shield",
	Moment: "Sparkles",
	Mute: "VolumeX",
	Muted: "VolumeX",
	Notification: "Bell",
	Onboarding: "Sparkles",
	Outage: "AlertTriangle",
	Payment: "CreditCard",
	Pin: "Pin",
	Playlist: "ListMusic",
	Podcast: "Mic",
	Poll: "BarChart3",
	PollResult: "BarChart3",
	Post: "FileText",
	Privacy: "Lock",
	Profile: "User",
	Reach: "TrendingUp",
	ReadingProgress: "BookOpen",
	Reaction: "Heart",
	Recommendation: "ThumbsUp",
	Receipt: "Receipt",
	Report: "Flag",
	Request: "Inbox",
	Retention: "Repeat2",
	Safety: "Shield",
	Schedule: "Calendar",
	Scheduled: "Calendar",
	Search: "Search",
	Security: "Shield",
	Selection: "CheckSquare",
	Session: "Clock",
	Setting: "Settings",
	Settings: "Settings",
	Share: "Share2",
	Space: "Mic",
	Storage: "Database",
	StorageUsage: "Database",
	Story: "BookOpen",
	Streak: "Flame",
	Subscription: "Star",
	Tag: "Tag",
	Team: "Users",
	Theme: "Palette",
	Thread: "MessageSquare",
	Topic: "Hash",
	Trend: "TrendingUp",
	UploadProgress: "Upload",
	Upgrade: "Sparkles",
	Verification: "BadgeCheck",
	Video: "Video",
	Visibility: "Eye",
	Webhook: "Link2",
	Workspace: "Briefcase",
};

function iconFor(noun) {
	const icon = NOUN_ICONS[noun];
	if (!icon) throw new Error(`no icon mapped for ${noun}`);
	return icon;
}

function hash(text) {
	let value = 0;
	for (const ch of text) value = (value * 31 + ch.charCodeAt(0)) >>> 0;
	return value;
}

function kebab(name) {
	return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

// "SuggestedUser" -> "suggested user", for prose inside placeholder copy.
function words(name) {
	return name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
}

const templates = {
	row({ name, noun }) {
		const icon = iconFor(noun);
		// Two shapes, so the largest family is not thirty-eight copies of one file.
		if (hash(name) % 2 === 0) {
			return `import { ${icon} } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const toneStyles = {
	neutral: "text-foreground",
	info: "text-sky-600",
	warning: "text-amber-600",
	danger: "text-rose-600",
};

export interface ${name}Props {
	title: string;
	/** Secondary line under the title. */
	description?: string;
	/** Replaces the default icon at the start of the row. */
	leading?: ReactNode;
	/** Rendered at the far right, e.g. a switch or an overflow button. */
	trailing?: ReactNode;
	tone?: "neutral" | "info" | "warning" | "danger";
	onSelect?: () => void;
}

export function ${name}({
	title,
	description,
	leading,
	trailing,
	tone = "neutral",
	onSelect,
}: ${name}Props) {
	return (
		<div
			className="flex items-center gap-3 px-4 py-3 hover:bg-accent/40"
			onClick={onSelect}
		>
			{leading ?? <${icon} className={cn("h-4 w-4 shrink-0", toneStyles[tone])} />}
			<div className="min-w-0 flex-1">
				<div className={cn("truncate text-sm font-medium", toneStyles[tone])}>{title}</div>
				{description ? (
					<div className="truncate text-xs text-muted-foreground">{description}</div>
				) : null}
			</div>
			{trailing}
		</div>
	);
}
`;
		}
		return `import { ChevronRight, ${icon} } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

export interface ${name}Props {
	label: string;
	/** Right-aligned value, shown before the chevron. */
	value?: string;
	/** Rendered under the label when the row needs explaining. */
	help?: ReactNode;
	emphasis?: "default" | "strong";
	/** Draws a rule under the row. */
	divided?: boolean;
	onSelect?: () => void;
}

export function ${name}({
	label,
	value,
	help,
	emphasis = "default",
	divided = true,
	onSelect,
}: ${name}Props) {
	return (
		<div>
			<button
				type="button"
				className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-accent/40"
				onClick={onSelect}
			>
				<${icon} className="h-4 w-4 shrink-0 text-muted-foreground" />
				<div className="min-w-0 flex-1">
					<div
						className={cn(
							"truncate text-sm",
							emphasis === "strong" ? "font-semibold" : "font-medium",
						)}
					>
						{label}
					</div>
					{help ? <div className="text-xs text-muted-foreground">{help}</div> : null}
				</div>
				{value ? <span className="text-sm text-muted-foreground">{value}</span> : null}
				<ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
			</button>
			{divided ? <Separator /> : null}
		</div>
	);
}
`;
	},

	card({ name, noun }) {
		const icon = iconFor(noun);
		if (hash(name) % 2 === 0) {
			return `import { ${icon} } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Badge } from "~/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/ui/card";

export interface ${name}Model {
	id: string;
	title: string;
	summary: string;
	/** Shown as a pill in the header. */
	status: "draft" | "active" | "archived";
	updatedAt: string;
}

const sizeStyles = {
	sm: "p-3 text-xs",
	md: "p-4 text-sm",
	lg: "p-6 text-base",
};

export interface ${name}Props {
	item: ${name}Model;
	size?: "sm" | "md" | "lg";
	/** Rendered along the bottom edge, typically a row of actions. */
	footer?: ReactNode;
	onOpen?: () => void;
}

export function ${name}({ item, size = "md", footer, onOpen }: ${name}Props) {
	return (
		<Card className="cursor-pointer transition-colors hover:bg-accent/30" onClick={onOpen}>
			<CardHeader className={cn("flex-row items-center gap-2 space-y-0", sizeStyles[size])}>
				<${icon} className="h-4 w-4 shrink-0 text-muted-foreground" />
				<CardTitle className="min-w-0 flex-1 truncate text-sm">{item.title}</CardTitle>
				<Badge variant={item.status === "active" ? "default" : "secondary"}>
					{item.status}
				</Badge>
			</CardHeader>
			<CardContent className={cn("pt-0", sizeStyles[size])}>
				<p className="line-clamp-3 text-muted-foreground">{item.summary}</p>
				<p className="mt-2 text-xs text-muted-foreground">Updated {item.updatedAt}</p>
			</CardContent>
			{footer ? <CardFooter className="gap-2 p-4 pt-0">{footer}</CardFooter> : null}
		</Card>
	);
}
`;
		}
		return `import { ${icon} } from "lucide-react";
import type { ReactNode } from "react";

import type { AuthorModel } from "~/models";
import { Button } from "~/ui/button";
import { Card, CardContent } from "~/ui/card";

import { UserAvatar } from "./user-avatar";

export interface ${name}Props {
	title: string;
	/** One-line description under the title. */
	subtitle?: string;
	/** Whoever created the ${words(noun)}; drives the byline. */
	owner: AuthorModel;
	/** Members, followers, or items, depending on the ${words(noun)}. */
	memberCount: number;
	/** Rendered in the top-right corner. */
	badge?: ReactNode;
	joined?: boolean;
	onJoinToggle?: (joined: boolean) => void;
}

export function ${name}({
	title,
	subtitle,
	owner,
	memberCount,
	badge,
	joined = false,
	onJoinToggle,
}: ${name}Props) {
	return (
		<Card>
			<CardContent className="flex flex-col gap-3 p-4">
				<div className="flex items-start gap-2">
					<${icon} className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
					<div className="min-w-0 flex-1">
						<div className="truncate font-semibold">{title}</div>
						{subtitle ? (
							<div className="truncate text-sm text-muted-foreground">{subtitle}</div>
						) : null}
					</div>
					{badge}
				</div>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<UserAvatar author={owner} density="compact" />
					<span className="truncate">{owner.displayName}</span>
					<span aria-hidden>·</span>
					<span>{memberCount.toLocaleString("en-US")} members</span>
				</div>
				<Button
					variant={joined ? "outline" : "default"}
					size="sm"
					className="rounded-full"
					onClick={() => onJoinToggle?.(!joined)}
				>
					{joined ? "Joined" : "Join"}
				</Button>
			</CardContent>
		</Card>
	);
}
`;
	},

	panel({ name, noun }) {
		const icon = iconFor(noun);
		return `import { ChevronDown, ${icon} } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";
import { Separator } from "~/ui/separator";

export interface ${name}Props {
	heading: string;
	/** The panel's contents. */
	body: ReactNode;
	/** Rendered under a rule at the bottom of the panel. */
	footer?: ReactNode;
	collapsed?: boolean;
	/** Receives the state the panel is moving to. */
	onToggle?: (collapsed: boolean) => void;
}

export function ${name}({
	heading,
	body,
	footer,
	collapsed = false,
	onToggle,
}: ${name}Props) {
	return (
		<Card>
			<CardHeader className="flex-row items-center gap-2 space-y-0 p-4">
				<${icon} className="h-4 w-4 text-muted-foreground" />
				<CardTitle className="flex-1 text-sm">{heading}</CardTitle>
				<button
					type="button"
					aria-expanded={!collapsed}
					aria-label={collapsed ? "Expand" : "Collapse"}
					onClick={() => onToggle?.(!collapsed)}
				>
					<ChevronDown
						className={cn(
							"h-4 w-4 text-muted-foreground transition-transform",
							collapsed && "-rotate-90",
						)}
					/>
				</button>
			</CardHeader>
			{collapsed ? null : (
				<CardContent className="p-4 pt-0 text-sm">
					{body}
					{footer ? (
						<>
							<Separator className="my-3" />
							{footer}
						</>
					) : null}
				</CardContent>
			)}
		</Card>
	);
}
`;
	},

	emptyState({ name, noun }) {
		const icon = iconFor(noun);
		return `import { ${icon} } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const variantStyles = {
	default: "py-12",
	subtle: "py-6 text-muted-foreground",
	card: "rounded-xl border py-10",
};

export interface ${name}Props {
	title: string;
	/** Explains why there is nothing to show and what to do next. */
	message: string;
	/** Rendered under the message, typically a button. */
	action?: ReactNode;
	variant?: "default" | "subtle" | "card";
}

export function ${name}({ title, message, action, variant = "default" }: ${name}Props) {
	return (
		<div
			className={cn(
				"flex flex-col items-center gap-2 px-6 text-center",
				variantStyles[variant],
			)}
		>
			<${icon} className="h-8 w-8 text-muted-foreground" />
			<h3 className="text-base font-semibold">{title}</h3>
			<p className="max-w-sm text-sm text-muted-foreground">{message}</p>
			{action}
		</div>
	);
}
`;
	},

	header({ name, noun }) {
		return `import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

export interface ${name}Props {
	title: string;
	/** Second line, e.g. a post count or a member count. */
	subtitle?: string;
	/** Rendered to the left of the title. */
	avatar?: ReactNode;
	/** Rendered on the right, e.g. an overflow menu. */
	actions?: ReactNode;
	/** Pins the header to the top of its scroll container. */
	sticky?: boolean;
}

export function ${name}({ title, subtitle, avatar, actions, sticky = false }: ${name}Props) {
	return (
		<div className={cn("bg-background", sticky && "sticky top-0 z-30")}>
			<div className="flex items-center gap-3 px-4 py-3">
				{avatar}
				<div className="min-w-0 flex-1">
					<h2 className="truncate text-base font-semibold leading-tight">{title}</h2>
					{subtitle ? (
						<p className="truncate text-xs text-muted-foreground">{subtitle}</p>
					) : null}
				</div>
				{actions}
			</div>
			<Separator />
		</div>
	);
}
`;
	},

	toolbar({ name, noun }) {
		return `import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const alignStyles = {
	start: "justify-start",
	between: "justify-between",
	end: "justify-end",
};

export interface ${name}Props {
	/** The controls to lay out. */
	children: ReactNode;
	align?: "start" | "between" | "end";
	/** Draws a rule under the toolbar. */
	bordered?: boolean;
}

export function ${name}({ children, align = "start", bordered = true }: ${name}Props) {
	return (
		<div
			role="toolbar"
			className={cn(
				"flex items-center gap-1 px-2 py-1.5",
				alignStyles[align],
				bordered && "border-b",
			)}
		>
			{children}
		</div>
	);
}
`;
	},

	banner({ name, noun }) {
		return `import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";

const toneStyles = {
	info: "border-sky-200 bg-sky-50 text-sky-900",
	success: "border-emerald-200 bg-emerald-50 text-emerald-900",
	warning: "border-amber-200 bg-amber-50 text-amber-900",
	critical: "border-rose-200 bg-rose-50 text-rose-900",
};

const toneIcons: Record<
	"info" | "success" | "warning" | "critical",
	ComponentType<{ className?: string }>
> = {
	info: Info,
	success: CheckCircle2,
	warning: AlertTriangle,
	critical: AlertTriangle,
};

export interface ${name}Props {
	tone: "info" | "success" | "warning" | "critical";
	title: string;
	/** Detail line under the title. */
	message?: string;
	/** Rendered at the right, typically a link or a button. */
	action?: ReactNode;
	/** When given, a close button appears. */
	onDismiss?: () => void;
}

export function ${name}({ tone, title, message, action, onDismiss }: ${name}Props) {
	const Icon = toneIcons[tone];

	return (
		<div className={cn("flex items-start gap-3 rounded-lg border p-3", toneStyles[tone])}>
			<Icon className="mt-0.5 h-4 w-4 shrink-0" />
			<div className="min-w-0 flex-1">
				<div className="text-sm font-semibold">{title}</div>
				{message ? <div className="text-sm opacity-90">{message}</div> : null}
			</div>
			{action}
			{onDismiss ? (
				<Button variant="ghost" size="icon" aria-label="Dismiss" onClick={onDismiss}>
					<X className="h-4 w-4" />
				</Button>
			) : null}
		</div>
	);
}
`;
	},

	tile({ name, noun }) {
		const icon = iconFor(noun);
		return `import { ArrowDownRight, ArrowRight, ArrowUpRight, ${icon} } from "lucide-react";
import type { ComponentType } from "react";

import { cn } from "~/lib/utils";
import { Card, CardContent } from "~/ui/card";

const trendIcons: Record<"up" | "down" | "flat", ComponentType<{ className?: string }>> = {
	up: ArrowUpRight,
	down: ArrowDownRight,
	flat: ArrowRight,
};

const trendStyles = {
	up: "text-emerald-600",
	down: "text-rose-600",
	flat: "text-muted-foreground",
};

export interface ${name}Props {
	label: string;
	/** Already formatted for display, e.g. "12.4K". */
	value: string;
	/** Percentage change against the previous period. */
	delta?: number;
	trend?: "up" | "down" | "flat";
}

export function ${name}({ label, value, delta, trend = "flat" }: ${name}Props) {
	const TrendIcon = trendIcons[trend];

	return (
		<Card>
			<CardContent className="flex flex-col gap-1 p-4">
				<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
					<${icon} className="h-3.5 w-3.5" />
					{label}
				</div>
				<div className="text-2xl font-semibold tabular-nums">{value}</div>
				{delta === undefined ? null : (
					<div className={cn("flex items-center gap-1 text-xs", trendStyles[trend])}>
						<TrendIcon className="h-3.5 w-3.5" />
						{delta}%
					</div>
				)}
			</CardContent>
		</Card>
	);
}
`;
	},

	dialog({ name, noun }) {
		return `import { Button } from "~/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/ui/card";

export interface ${name}Props {
	open: boolean;
	title: string;
	/** Explains what confirming will do. */
	description?: string;
	/** Text of the confirming button. */
	confirmLabel?: string;
	/** Draws the confirming button in the destructive style. */
	destructive?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export function ${name}({
	open,
	title,
	description,
	confirmLabel = "Confirm",
	destructive = false,
	onConfirm,
	onCancel,
}: ${name}Props) {
	if (!open) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
			<Card role="dialog" aria-modal className="w-full max-w-sm">
				<CardHeader className="p-4">
					<CardTitle className="text-base">{title}</CardTitle>
				</CardHeader>
				{description ? (
					<CardContent className="p-4 pt-0 text-sm text-muted-foreground">
						{description}
					</CardContent>
				) : null}
				<CardFooter className="justify-end gap-2 p-4 pt-0">
					<Button variant="ghost" onClick={onCancel}>
						Cancel
					</Button>
					<Button variant={destructive ? "destructive" : "default"} onClick={onConfirm}>
						{confirmLabel}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
`;
	},

	menu({ name, noun }) {
		return `import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

export interface ${name}Item {
	id: string;
	label: string;
	/** Renders the item in red and moves it under a rule. */
	destructive?: boolean;
	disabled?: boolean;
}

export interface ${name}Props {
	items: ${name}Item[];
	onSelect: (id: string) => void;
	/** Which edge the menu is anchored to. */
	align?: "left" | "right";
}

export function ${name}({ items, onSelect, align = "left" }: ${name}Props) {
	const safe = items.filter((item) => !item.destructive);
	const destructive = items.filter((item) => item.destructive);

	return (
		<div
			role="menu"
			className={cn(
				"min-w-[180px] rounded-md border bg-popover py-1 shadow-md",
				align === "right" ? "text-right" : "text-left",
			)}
		>
			{safe.map((item) => (
				<button
					key={item.id}
					type="button"
					role="menuitem"
					disabled={item.disabled}
					className="w-full px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-50"
					onClick={() => onSelect(item.id)}
				>
					{item.label}
				</button>
			))}
			{destructive.length > 0 ? <Separator className="my-1" /> : null}
			{destructive.map((item) => (
				<button
					key={item.id}
					type="button"
					role="menuitem"
					disabled={item.disabled}
					className="w-full px-3 py-1.5 text-sm text-destructive hover:bg-accent disabled:opacity-50"
					onClick={() => onSelect(item.id)}
				>
					{item.label}
				</button>
			))}
		</div>
	);
}
`;
	},

	chip({ name, noun }) {
		const icon = iconFor(noun);
		return `import { X, ${icon} } from "lucide-react";

import { cn } from "~/lib/utils";

const toneStyles = {
	neutral: "border bg-background text-foreground",
	accent: "bg-primary text-primary-foreground",
	muted: "bg-muted text-muted-foreground",
};

export interface ${name}Props {
	label: string;
	tone?: "neutral" | "accent" | "muted";
	/** Shows the leading glyph. */
	withIcon?: boolean;
	/** Shows the trailing close button. */
	removable?: boolean;
	onRemove?: () => void;
}

export function ${name}({
	label,
	tone = "neutral",
	withIcon = true,
	removable = false,
	onRemove,
}: ${name}Props) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
				toneStyles[tone],
			)}
		>
			{withIcon ? <${icon} className="h-3 w-3" /> : null}
			{label}
			{removable ? (
				<button type="button" aria-label={"Remove " + label} onClick={onRemove}>
					<X className="h-3 w-3" />
				</button>
			) : null}
		</span>
	);
}
`;
	},

	preview({ name, noun }) {
		const icon = iconFor(noun);
		return `import { ${icon} } from "lucide-react";

import { Card, CardContent } from "~/ui/card";

export interface ${name}Props {
	/** Canonical URL of the ${words(noun)} being previewed. */
	url: string;
	title: string;
	description?: string;
	/** Leading thumbnail; the icon is drawn when it is absent. */
	thumbnailUrl?: string;
	onOpen?: () => void;
}

export function ${name}({ url, title, description, thumbnailUrl, onOpen }: ${name}Props) {
	return (
		<Card
			className="cursor-pointer overflow-hidden transition-colors hover:bg-accent/30"
			onClick={onOpen}
		>
			<CardContent className="flex items-center gap-3 p-0">
				{thumbnailUrl ? (
					<img src={thumbnailUrl} alt="" className="h-20 w-20 shrink-0 object-cover" />
				) : (
					<div className="flex h-20 w-20 shrink-0 items-center justify-center bg-muted">
						<${icon} className="h-5 w-5 text-muted-foreground" />
					</div>
				)}
				<div className="min-w-0 flex-1 py-2 pr-3">
					<div className="truncate text-sm font-semibold">{title}</div>
					{description ? (
						<div className="line-clamp-2 text-xs text-muted-foreground">{description}</div>
					) : null}
					<div className="truncate text-xs text-muted-foreground">{url}</div>
				</div>
			</CardContent>
		</Card>
	);
}
`;
	},

	summary({ name, noun }) {
		return `import { cn } from "~/lib/utils";
import type { AuthorModel } from "~/models";
import { Separator } from "~/ui/separator";

import { UserAvatar } from "./user-avatar";

export interface ${name}Stat {
	label: string;
	value: number;
}

export interface ${name}Props {
	author: AuthorModel;
	/** One-line description of what is being summarised. */
	headline: string;
	stats: ${name}Stat[];
	/** Drops the padding and the avatar down a size. */
	dense?: boolean;
}

export function ${name}({ author, headline, stats, dense = false }: ${name}Props) {
	return (
		<div className={cn("flex flex-col gap-2", dense ? "p-2" : "p-4")}>
			<div className="flex items-center gap-2">
				<UserAvatar author={author} density={dense ? "compact" : "cozy"} />
				<div className="min-w-0">
					<div className="truncate text-sm font-semibold">{author.displayName}</div>
					<div className="truncate text-xs text-muted-foreground">{headline}</div>
				</div>
			</div>
			<Separator />
			<dl className="flex items-center gap-4">
				{stats.map((stat) => (
					<div key={stat.label} className="flex flex-col">
						<dt className="text-xs text-muted-foreground">{stat.label}</dt>
						<dd className="text-sm font-semibold tabular-nums">
							{stat.value.toLocaleString("en-US")}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
`;
	},

	section({ name, noun }) {
		return `import type { ReactNode } from "react";

import { Separator } from "~/ui/separator";

export interface ${name}Props {
	heading: string;
	/** Explains the group of controls under the heading. */
	description?: string;
	/** The rows or controls belonging to this section. */
	children: ReactNode;
	/** Draws a rule between the heading and the contents. */
	divider?: boolean;
}

export function ${name}({ heading, description, children, divider = true }: ${name}Props) {
	return (
		<section className="flex flex-col gap-2 py-4">
			<div className="px-4">
				<h3 className="text-sm font-semibold">{heading}</h3>
				{description ? (
					<p className="text-xs text-muted-foreground">{description}</p>
				) : null}
			</div>
			{divider ? <Separator /> : null}
			<div className="flex flex-col">{children}</div>
		</section>
	);
}
`;
	},

	list({ name, noun }) {
		return `import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

export interface ${name}Entry {
	id: string;
	primary: string;
	secondary?: string;
}

export interface ${name}Props {
	entries: ${name}Entry[];
	/** Shown in place of the rows when there is nothing to list. */
	emptyLabel?: string;
	/** Rendered at the right of every row. */
	accessory?: ReactNode;
	/** Removes the rules between rows. */
	seamless?: boolean;
	onEntrySelect?: (id: string) => void;
}

export function ${name}({
	entries,
	emptyLabel = "Nothing here yet",
	accessory,
	seamless = false,
	onEntrySelect,
}: ${name}Props) {
	if (entries.length === 0) {
		return <p className="px-4 py-6 text-center text-sm text-muted-foreground">{emptyLabel}</p>;
	}

	return (
		<ul className={cn("flex flex-col", !seamless && "divide-y")}>
			{entries.map((entry) => (
				<li key={entry.id}>
					<button
						type="button"
						className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-accent/40"
						onClick={() => onEntrySelect?.(entry.id)}
					>
						<div className="min-w-0 flex-1">
							<div className="truncate text-sm">{entry.primary}</div>
							{entry.secondary ? (
								<div className="truncate text-xs text-muted-foreground">
									{entry.secondary}
								</div>
							) : null}
						</div>
						{accessory}
					</button>
				</li>
			))}
		</ul>
	);
}
`;
	},

	sheet({ name, noun }) {
		return `import { X } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";
import { Separator } from "~/ui/separator";

const sideStyles = {
	bottom: "inset-x-0 bottom-0 rounded-t-2xl",
	right: "inset-y-0 right-0 w-full max-w-sm",
};

export interface ${name}Props {
	open: boolean;
	title: string;
	/** The sheet's contents. */
	children: ReactNode;
	/** Which edge the sheet slides in from. */
	side?: "bottom" | "right";
	onClose: () => void;
}

export function ${name}({ open, title, children, side = "bottom", onClose }: ${name}Props) {
	if (!open) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 bg-black/40">
			<div className={cn("absolute border bg-background shadow-lg", sideStyles[side])}>
				<div className="flex items-center gap-2 p-4">
					<h2 className="flex-1 text-sm font-semibold">{title}</h2>
					<Button variant="ghost" size="icon" aria-label="Close" onClick={onClose}>
						<X className="h-4 w-4" />
					</Button>
				</div>
				<Separator />
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
}
`;
	},

	badge({ name, noun }) {
		const icon = iconFor(noun);
		return `import { ${icon} } from "lucide-react";

import { Badge } from "~/ui/badge";

const levelLabels = {
	none: "None",
	basic: "Basic",
	trusted: "Trusted",
	official: "Official",
};

export interface ${name}Props {
	/** How far through the ${words(noun)} ladder this account is. */
	level: "none" | "basic" | "trusted" | "official";
	/** Overrides the label derived from the level. */
	label?: string;
	showIcon?: boolean;
}

export function ${name}({ level, label, showIcon = true }: ${name}Props) {
	if (level === "none") {
		return null;
	}

	return (
		<Badge variant={level === "official" ? "default" : "secondary"} className="gap-1">
			{showIcon ? <${icon} className="h-3 w-3" /> : null}
			{label ?? levelLabels[level]}
		</Badge>
	);
}
`;
	},

	bar({ name, noun }) {
		return `import { cn } from "~/lib/utils";

const toneStyles = {
	default: "bg-primary",
	warning: "bg-amber-500",
	danger: "bg-rose-500",
};

export interface ${name}Props {
	value: number;
	/** The value that counts as full. */
	max?: number;
	/** Shown above the track. */
	label?: string;
	tone?: "default" | "warning" | "danger";
	/** Prints the percentage at the right of the label. */
	showValue?: boolean;
}

export function ${name}({
	value,
	max = 100,
	label,
	tone = "default",
	showValue = false,
}: ${name}Props) {
	const percent = Math.max(0, Math.min(100, Math.round((value / max) * 100)));

	return (
		<div className="flex flex-col gap-1">
			{label || showValue ? (
				<div className="flex items-center justify-between text-xs text-muted-foreground">
					<span>{label}</span>
					{showValue ? <span className="tabular-nums">{percent}%</span> : null}
				</div>
			) : null}
			<div
				role="progressbar"
				aria-valuenow={percent}
				aria-valuemin={0}
				aria-valuemax={100}
				className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
			>
				<div className={cn("h-full", toneStyles[tone])} style={{ width: percent + "%" }} />
			</div>
		</div>
	);
}
`;
	},

	group({ name, noun }) {
		return `import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const gapStyles = {
	xs: "gap-0.5",
	sm: "gap-1.5",
	md: "gap-3",
};

export interface ${name}Props {
	/** The items to lay out. */
	children: ReactNode;
	/** Lets the items flow onto a second line. */
	wrap?: boolean;
	gap?: "xs" | "sm" | "md";
	/** Accessible name for the group as a whole. */
	label?: string;
}

export function ${name}({ children, wrap = true, gap = "sm", label }: ${name}Props) {
	return (
		<div
			role="group"
			aria-label={label}
			className={cn("flex items-center", wrap && "flex-wrap", gapStyles[gap])}
		>
			{children}
		</div>
	);
}
`;
	},

	viewer({ name, noun }) {
		return `import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";

export interface ${name}Source {
	url: string;
	alt: string;
}

export interface ${name}Props {
	sources: ${name}Source[];
	/** Index of the source currently on screen. */
	index: number;
	onIndexChange: (index: number) => void;
	/** Draws the filmstrip under the main frame. */
	showThumbnails?: boolean;
}

export function ${name}({
	sources,
	index,
	onIndexChange,
	showThumbnails = true,
}: ${name}Props) {
	const current = sources[index];
	if (!current) {
		return null;
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="relative overflow-hidden rounded-xl border bg-black">
				<img src={current.url} alt={current.alt} className="h-full w-full object-contain" />
				<Button
					variant="ghost"
					size="icon"
					aria-label="Previous"
					className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80"
					disabled={index === 0}
					onClick={() => onIndexChange(index - 1)}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Next"
					className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80"
					disabled={index === sources.length - 1}
					onClick={() => onIndexChange(index + 1)}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
			{showThumbnails ? (
				<div className="flex gap-1 overflow-x-auto">
					{sources.map((source, at) => (
						<button
							key={source.url}
							type="button"
							className={cn(
								"h-12 w-12 shrink-0 overflow-hidden rounded border",
								at === index && "ring-2 ring-ring",
							)}
							onClick={() => onIndexChange(at)}
						>
							<img src={source.url} alt="" className="h-full w-full object-cover" />
						</button>
					))}
				</div>
			) : null}
		</div>
	);
}
`;
	},
};

const catalogue = flatten();
if (count > catalogue.length) {
	console.error(`catalogue holds ${catalogue.length} components, ${count} requested`);
	process.exit(1);
}

const dir = join(target, "src", "components");
mkdirSync(dir, { recursive: true });

for (const entry of catalogue.slice(0, count)) {
	if (RESERVED.has(entry.name)) {
		console.error(`${entry.name} collides with a hand-written component`);
		process.exit(1);
	}
	writeFileSync(join(dir, `${kebab(entry.name)}.tsx`), templates[entry.kind](entry));
}

console.log(`${count} components written to ${dir}`);
