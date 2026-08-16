// Emits the bulk of the product surface for the M and L Mantine hosts.
//
// docs/SCALE.md holds the 20 contract components and the hand-written near-miss families
// fixed, and grows everything else. That "everything else" is what this writes: ordinary
// screens-worth of components from the same domain, each a real implementation on Mantine.
//
// Names come from an archetype x subject pairing, emitted round-robin across archetypes so
// that any prefix of the list spans the whole shape space rather than 40 consecutive rows.
//
// Usage: node scripts/gen-filler-mantine.mjs <host-dir> <count>

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [hostDir, countArg] = process.argv.slice(2);
if (!hostDir || !countArg) {
	console.error("usage: node scripts/gen-filler-mantine.mjs <host-dir> <count>");
	process.exit(1);
}
const count = Number(countArg);

// Names owned by the contract and by the near-miss families; never generated over.
const RESERVED = new Set([
	"AppShell",
	"TimelineHeader",
	"SearchField",
	"NotificationBell",
	"UserAvatar",
	"FeedTabs",
	"PostComposer",
	"VisibilityPicker",
	"PostCard",
	"PostAuthorLine",
	"PostBody",
	"QuotedPost",
	"PostMedia",
	"PostActionBar",
	"ActionButton",
	"TrendPanel",
	"TrendItem",
	"SuggestedUserPanel",
	"SuggestedUserRow",
	"FollowButton",
	"PostCardCompact",
	"PostCardSkeleton",
	"LegacyPostCard",
	"PostCardMedia",
	"UserAvatarGroup",
	"AvatarStack",
	"UserAvatarLegacy",
	"ActionButtonGroup",
	"IconActionButton",
	"ActionButtonLegacy",
	"TrendPanelCompact",
	"TrendBoard",
	"SuggestedUserPanelLegacy",
	"SuggestedUserGrid",
	"PostComposerCompact",
	"ReplyComposer",
	"FeedTabsLegacy",
	"FeedSegmentedControl",
	"SearchFieldCompact",
	"SearchBar",
]);

function kebab(name) {
	return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

// Each archetype is one prop shape. Bodies differ per archetype, not per subject, the same
// way a real design system has one row component copied into fifteen contexts.
const archetypes = [
	{
		suffix: "Row",
		subjects: [
			"Notification",
			"Mention",
			"Bookmark",
			"Message",
			"Follower",
			"Block",
			"Mute",
			"Device",
			"Session",
			"Setting",
			"Language",
			"Report",
			"Invite",
			"Draft",
			"Poll",
		],
		render: (n) => `import { Badge, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	/** Primary line of the row. */
	title: string;
	/** Secondary line, shown under the title. */
	subtitle?: string;
	/** Right-aligned metadata, e.g. a timestamp. */
	meta?: string;
	/** Slot at the start of the row. */
	leading?: ReactNode;
	/** Slot at the end of the row. */
	trailing?: ReactNode;
	/** Emphasises the row and shows the unread marker. */
	unread?: boolean;
	onSelect?: () => void;
}

export function ${n}({
	title,
	subtitle = "",
	meta = "",
	leading,
	trailing,
	unread = false,
	onSelect,
}: ${n}Props) {
	return (
		<UnstyledButton w="100%" onClick={onSelect}>
			<Group gap="sm" wrap="nowrap" align="flex-start" py="xs">
				{leading}
				<Stack gap={2} flex={1} miw={0}>
					<Group gap={6} wrap="nowrap">
						<Text size="sm" fw={unread ? 700 : 500} truncate>
							{title}
						</Text>
						{unread ? (
							<Badge size="xs" variant="filled" color="blue">
								New
							</Badge>
						) : null}
					</Group>
					{subtitle === "" ? null : (
						<Text size="xs" c="dimmed" truncate>
							{subtitle}
						</Text>
					)}
				</Stack>
				{meta === "" ? null : (
					<Text size="xs" c="dimmed">
						{meta}
					</Text>
				)}
				{trailing}
			</Group>
		</UnstyledButton>
	);
}
`,
		renderAlt: (n) => `import { Group, Indicator, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Entry {
	id: string;
	label: string;
	/** Second line, usually a handle or a path. */
	detail?: string;
}

export interface ${n}Props {
	entry: ${n}Entry;
	/** Read state of the entry. */
	state: "read" | "unread" | "muted";
	/** Slot for the control on the right. */
	action?: ReactNode;
	/** Shown at the far right, e.g. a relative time. */
	timestamp?: string;
	onOpen?: () => void;
}

export function ${n}({ entry, state, action, timestamp = "", onOpen }: ${n}Props) {
	return (
		<Group
			gap="sm"
			wrap="nowrap"
			py="xs"
			opacity={state === "muted" ? 0.6 : 1}
			onClick={onOpen}
			style={{ cursor: onOpen ? "pointer" : "default" }}
		>
			<Indicator size={8} color="blue" disabled={state !== "unread"} position="middle-start" offset={-6}>
				<Stack gap={2} miw={0}>
					<Text size="sm" fw={state === "unread" ? 600 : 400} truncate>
						{entry.label}
					</Text>
					{entry.detail === undefined ? null : (
						<Text size="xs" c="dimmed" truncate>
							{entry.detail}
						</Text>
					)}
				</Stack>
			</Indicator>
			<Group gap="xs" wrap="nowrap" ml="auto">
				{timestamp === "" ? null : (
					<Text size="xs" c="dimmed">
						{timestamp}
					</Text>
				)}
				{action}
			</Group>
		</Group>
	);
}
`,
	},
	{
		suffix: "Card",
		subjects: [
			"Profile",
			"Topic",
			"Space",
			"Event",
			"Article",
			"Link",
			"Photo",
			"Video",
			"Poll",
			"Collection",
			"Community",
			"Highlight",
			"Moderation",
			"Subscription",
			"Insight",
		],
		render: (n) => `import { Card, Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Item {
	id: string;
	title: string;
	description?: string;
	/** Shown in the corner when set. */
	count?: number;
}

export interface ${n}Props {
	item: ${n}Item;
	/** Surface weight of the card. */
	variant?: "plain" | "outlined" | "elevated";
	/** Slot rendered along the bottom edge. */
	footer?: ReactNode;
	onOpen?: () => void;
}

export function ${n}({ item, variant = "outlined", footer, onOpen }: ${n}Props) {
	return (
		<Card
			withBorder={variant !== "plain"}
			shadow={variant === "elevated" ? "sm" : "none"}
			radius="md"
			padding="md"
			onClick={onOpen}
			style={{ cursor: onOpen ? "pointer" : "default" }}
		>
			<Stack gap="xs">
				<Group justify="space-between" gap="xs" wrap="nowrap">
					<Text fw={600} size="sm" truncate>
						{item.title}
					</Text>
					{item.count === undefined ? null : (
						<Text size="xs" c="dimmed">
							{item.count}
						</Text>
					)}
				</Group>
				{item.description === undefined ? null : (
					<Text size="sm" c="dimmed" lineClamp={3}>
						{item.description}
					</Text>
				)}
				{footer}
			</Stack>
		</Card>
	);
}
`,
		renderAlt: (n) => `import { Badge, Card, Group, Image, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	title: string;
	/** Slot for the card contents. */
	body: ReactNode;
	/** Cover image drawn above the title. */
	image?: string;
	/** Labels shown under the body. */
	tags?: string[];
	/** Shows the dismiss affordance when provided. */
	onDismiss?: () => void;
}

export function ${n}({ title, body, image = "", tags = [], onDismiss }: ${n}Props) {
	return (
		<Card withBorder radius="md" padding="md">
			{image === "" ? null : (
				<Card.Section>
					<Image src={image} alt={title} h={140} fit="cover" />
				</Card.Section>
			)}
			<Stack gap="xs" mt={image === "" ? 0 : "sm"}>
				<Group justify="space-between" gap="xs" wrap="nowrap">
					<Text fw={600}>{title}</Text>
					{onDismiss === undefined ? null : (
						<Text size="xs" c="dimmed" onClick={onDismiss} style={{ cursor: "pointer" }}>
							Dismiss
						</Text>
					)}
				</Group>
				{body}
				{tags.length === 0 ? null : (
					<Group gap={6}>
						{tags.map((tag) => (
							<Badge key={tag} size="xs" variant="light" radius="sm">
								{tag}
							</Badge>
						))}
					</Group>
				)}
			</Stack>
		</Card>
	);
}
`,
	},
	{
		suffix: "Panel",
		subjects: [
			"Notification",
			"Privacy",
			"Account",
			"Analytics",
			"Moderation",
			"Bookmark",
			"Draft",
			"Session",
			"Language",
			"Invite",
			"Engagement",
			"Reach",
			"Discovery",
			"Safety",
			"Archive",
		],
		render: (n) => `import { Card, Collapse, Divider, Group, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	/** Panel title. */
	heading: string;
	/** Slot for the panel contents. */
	body: ReactNode;
	/** Slot for a control aligned with the heading. */
	action?: ReactNode;
	/** Hides the body behind the heading. */
	collapsed?: boolean;
	/** Inner spacing preset. */
	spacing?: "tight" | "normal" | "loose";
}

const PADDING: Record<"tight" | "normal" | "loose", string> = {
	tight: "xs",
	normal: "md",
	loose: "xl",
};

export function ${n}({ heading, body, action, collapsed = false, spacing = "normal" }: ${n}Props) {
	return (
		<Card component="section" withBorder radius="md" padding={PADDING[spacing]}>
			<Group justify="space-between" gap="xs" wrap="nowrap">
				<Text fw={700}>{heading}</Text>
				{action}
			</Group>
			<Divider my="sm" />
			<Collapse expanded={!collapsed}>{body}</Collapse>
		</Card>
	);
}
`,
		renderAlt: (n) => `import { LoadingOverlay, Paper, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	title: string;
	/** The panel contents. */
	children: ReactNode;
	/** Slot along the bottom edge. */
	footer?: ReactNode;
	/** Covers the panel while its data is in flight. */
	loading?: boolean;
}

export function ${n}({ title, children, footer, loading = false }: ${n}Props) {
	return (
		<Paper withBorder radius="md" p="md" pos="relative">
			<LoadingOverlay visible={loading} zIndex={20} />
			<Stack gap="sm">
				<Text size="sm" fw={700} tt="uppercase" c="dimmed">
					{title}
				</Text>
				{children}
				{footer}
			</Stack>
		</Paper>
	);
}
`,
	},
	{
		suffix: "EmptyState",
		subjects: [
			"Feed",
			"Search",
			"Bookmark",
			"Notification",
			"Message",
			"Follower",
			"Collection",
			"Media",
			"Draft",
			"Mention",
			"Topic",
			"Block",
		],
		render: (n) => `import { Center, Stack, Text, ThemeIcon } from "@mantine/core";
import type { ReactNode } from "react";

const TONE_COLOR: Record<"neutral" | "info" | "warning", string> = {
	neutral: "gray",
	info: "blue",
	warning: "yellow",
};

export interface ${n}Props {
	/** Headline explaining what is missing. */
	title: string;
	/** Sentence under the headline. */
	description?: string;
	/** Slot for the recovery action. */
	action?: ReactNode;
	/** Colour of the icon disc. */
	tone?: "neutral" | "info" | "warning";
}

export function ${n}({ title, description = "", action, tone = "neutral" }: ${n}Props) {
	return (
		<Center py="xl">
			<Stack align="center" gap="xs" maw={360}>
				<ThemeIcon size={48} radius="xl" variant="light" color={TONE_COLOR[tone]}>
					<Text size="lg">·</Text>
				</ThemeIcon>
				<Text fw={600}>{title}</Text>
				{description === "" ? null : (
					<Text size="sm" c="dimmed" ta="center">
						{description}
					</Text>
				)}
				{action}
			</Stack>
		</Center>
	);
}
`,
	},
	{
		suffix: "Banner",
		subjects: [
			"Outage",
			"Verification",
			"Upgrade",
			"Policy",
			"Maintenance",
			"Announcement",
			"Migration",
			"Beta",
		],
		render: (n) => `import { Alert } from "@mantine/core";

const SEVERITY_COLOR: Record<"info" | "success" | "warning" | "error", string> = {
	info: "blue",
	success: "green",
	warning: "yellow",
	error: "red",
};

export interface ${n}Props {
	/** The sentence shown to the user. */
	message: string;
	/** Drives the colour of the banner. */
	severity: "info" | "success" | "warning" | "error";
	/** Bold line above the message. */
	title?: string;
	/** Shows the close button. */
	dismissible?: boolean;
	onDismiss?: () => void;
}

export function ${n}({ message, severity, title = "", dismissible = false, onDismiss }: ${n}Props) {
	return (
		<Alert
			variant="light"
			radius="md"
			color={SEVERITY_COLOR[severity]}
			title={title === "" ? null : title}
			withCloseButton={dismissible}
			onClose={onDismiss}
		>
			{message}
		</Alert>
	);
}
`,
	},
	{
		suffix: "Toolbar",
		subjects: ["Feed", "Media", "Moderation", "Draft", "Thread", "Gallery", "Selection", "Filter"],
		render: (n) => `import { Box, Group } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	/** Slot aligned to the start of the bar. */
	left?: ReactNode;
	/** Slot aligned to the end of the bar. */
	right?: ReactNode;
	/** Pins the bar to the top of its scroll container. */
	sticky?: boolean;
	/** Draws the bottom rule. */
	bordered?: boolean;
}

export function ${n}({ left, right, sticky = false, bordered = true }: ${n}Props) {
	return (
		<Box
			px="sm"
			py="xs"
			pos={sticky ? "sticky" : "static"}
			top={0}
			bg="var(--mantine-color-body)"
			style={{
				zIndex: 50,
				borderBottom: bordered ? "1px solid var(--mantine-color-default-border)" : "none",
			}}
		>
			<Group justify="space-between" gap="sm" wrap="nowrap">
				<Group gap="xs" wrap="nowrap">
					{left}
				</Group>
				<Group gap="xs" wrap="nowrap">
					{right}
				</Group>
			</Group>
		</Box>
	);
}
`,
	},
	{
		suffix: "Badge",
		subjects: [
			"Verification",
			"Visibility",
			"Status",
			"Role",
			"Membership",
			"Label",
			"Priority",
			"Streak",
		],
		render: (n) => `import { Badge } from "@mantine/core";

const STATUS_COLOR: Record<"active" | "pending" | "paused" | "archived", string> = {
	active: "green",
	pending: "yellow",
	paused: "gray",
	archived: "dark",
};

export interface ${n}Props {
	/** Text inside the badge. */
	label: string;
	/** Drives the colour. */
	status: "active" | "pending" | "paused" | "archived";
	size?: "xs" | "sm" | "md";
	/** Draws the badge outlined instead of tinted. */
	outlined?: boolean;
}

export function ${n}({ label, status, size = "sm", outlined = false }: ${n}Props) {
	return (
		<Badge size={size} radius="sm" color={STATUS_COLOR[status]} variant={outlined ? "outline" : "light"}>
			{label}
		</Badge>
	);
}
`,
	},
	{
		suffix: "List",
		subjects: [
			"Notification",
			"Bookmark",
			"Follower",
			"Following",
			"Mention",
			"Message",
			"Device",
			"Session",
			"Topic",
			"Media",
		],
		render: (n) => `import { Divider, Stack, Text, UnstyledButton } from "@mantine/core";
import { Fragment } from "react";

export interface ${n}Entry {
	id: string;
	primary: string;
	secondary?: string;
}

export interface ${n}Props {
	entries: ${n}Entry[];
	/** Shown in place of the list when it is empty. */
	emptyLabel?: string;
	/** Draws a rule between entries. */
	dividers?: boolean;
	onEntrySelect?: (id: string) => void;
}

export function ${n}({
	entries,
	emptyLabel = "Nothing here yet",
	dividers = true,
	onEntrySelect,
}: ${n}Props) {
	if (entries.length === 0) {
		return (
			<Text size="sm" c="dimmed" py="md" ta="center">
				{emptyLabel}
			</Text>
		);
	}

	return (
		<Stack gap={0}>
			{entries.map((entry, index) => (
				<Fragment key={entry.id}>
					{dividers && index > 0 ? <Divider /> : null}
					<UnstyledButton py="xs" onClick={() => onEntrySelect?.(entry.id)}>
						<Text size="sm">{entry.primary}</Text>
						{entry.secondary === undefined ? null : (
							<Text size="xs" c="dimmed">
								{entry.secondary}
							</Text>
						)}
					</UnstyledButton>
				</Fragment>
			))}
		</Stack>
	);
}
`,
	},
	{
		suffix: "Header",
		subjects: [
			"Profile",
			"Thread",
			"Settings",
			"Collection",
			"Space",
			"Community",
			"Gallery",
			"Conversation",
			"Article",
			"Search",
		],
		render: (n) => `import { Avatar, Box, Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	title: string;
	/** Line under the title. */
	subtitle?: string;
	/** Image shown to the left of the title. */
	avatarUrl?: string;
	/** Slot for controls on the right. */
	actions?: ReactNode;
	/** Pins the header while its section scrolls. */
	sticky?: boolean;
}

export function ${n}({ title, subtitle = "", avatarUrl = "", actions, sticky = false }: ${n}Props) {
	return (
		<Box
			px="md"
			py="sm"
			pos={sticky ? "sticky" : "static"}
			top={0}
			bg="var(--mantine-color-body)"
			style={{ zIndex: 40 }}
		>
			<Group justify="space-between" gap="sm" wrap="nowrap">
				<Group gap="sm" wrap="nowrap" miw={0}>
					{avatarUrl === "" ? null : <Avatar src={avatarUrl} alt={title} size={36} radius="xl" />}
					<Stack gap={0} miw={0}>
						<Text fw={700} truncate>
							{title}
						</Text>
						{subtitle === "" ? null : (
							<Text size="xs" c="dimmed" truncate>
								{subtitle}
							</Text>
						)}
					</Stack>
				</Group>
				{actions}
			</Group>
		</Box>
	);
}
`,
	},
	{
		suffix: "Stat",
		subjects: [
			"Follower",
			"Impression",
			"Engagement",
			"Reach",
			"Post",
			"Reply",
			"Like",
			"Repost",
			"Profile",
			"Click",
		],
		render: (n) => `import { Group, NumberFormatter, Paper, Stack, Text } from "@mantine/core";

export interface ${n}Props {
	/** What the number counts. */
	label: string;
	value: number;
	/** Change against the previous period, in percent. */
	delta?: number;
	/** Whether to group thousands with separators. */
	grouped?: boolean;
}

export function ${n}({ label, value, delta, grouped = true }: ${n}Props) {
	return (
		<Paper withBorder radius="md" p="sm">
			<Stack gap={2}>
				<Text size="xs" c="dimmed" tt="uppercase">
					{label}
				</Text>
				<Group gap="xs" align="baseline">
					<Text fz="xl" fw={700}>
						<NumberFormatter value={value} thousandSeparator={grouped} />
					</Text>
					{delta === undefined ? null : (
						<Text size="xs" c={delta >= 0 ? "teal" : "red"}>
							{delta >= 0 ? "+" : ""}
							{delta}%
						</Text>
					)}
				</Group>
			</Stack>
		</Paper>
	);
}
`,
	},
	{
		suffix: "Toggle",
		subjects: [
			"Notification",
			"Privacy",
			"Autoplay",
			"Sound",
			"Email",
			"Push",
			"Theme",
			"Sensitive",
			"Location",
			"Analytics",
		],
		render: (n) => `import { Group, Switch } from "@mantine/core";

export interface ${n}Props {
	/** What the switch controls. */
	label: string;
	/** Sentence under the label. */
	description?: string;
	enabled: boolean;
	/** Fired with the state the switch is moving to. */
	onEnabledChange: (enabled: boolean) => void;
	disabled?: boolean;
}

export function ${n}({
	label,
	description = "",
	enabled,
	onEnabledChange,
	disabled = false,
}: ${n}Props) {
	return (
		<Group justify="space-between" gap="md" wrap="nowrap" py="xs">
			<Switch
				checked={enabled}
				label={label}
				description={description === "" ? null : description}
				disabled={disabled}
				labelPosition="left"
				w="100%"
				styles={{ body: { justifyContent: "space-between" } }}
				onChange={(event) => onEnabledChange(event.currentTarget.checked)}
			/>
		</Group>
	);
}
`,
	},
	{
		suffix: "Sheet",
		subjects: ["Share", "Report", "Filter", "Compose", "Visibility", "Media", "Translate", "Mute"],
		render: (n) => `import { Modal } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Props {
	/** Title shown in the sheet header. */
	title: string;
	/** Whether the sheet is on screen. */
	opened: boolean;
	/** Slot for the sheet contents. */
	content: ReactNode;
	onDismiss: () => void;
	size?: "sm" | "md" | "lg";
}

export function ${n}({ title, opened, content, onDismiss, size = "md" }: ${n}Props) {
	return (
		<Modal opened={opened} title={title} size={size} radius="md" centered onClose={onDismiss}>
			{content}
		</Modal>
	);
}
`,
	},
	{
		suffix: "Viewer",
		subjects: ["Media", "Photo", "Video", "Gallery", "Document", "Audio", "Thread"],
		render: (n) => `import { AspectRatio, Box, Group, Image, Text, UnstyledButton } from "@mantine/core";

export interface ${n}Source {
	src: string;
	caption?: string;
}

export interface ${n}Props {
	sources: ${n}Source[];
	/** Index of the source on screen. */
	index?: number;
	/** Fired with the index the user moved to. */
	onIndexChange?: (index: number) => void;
	/** Width divided by height of the frame. */
	ratio?: number;
}

export function ${n}({ sources, index = 0, onIndexChange, ratio = 16 / 9 }: ${n}Props) {
	const current = sources[index];
	if (current === undefined) {
		return null;
	}

	return (
		<Box>
			<AspectRatio ratio={ratio}>
				<Image src={current.src} alt={current.caption ?? ""} radius="md" fit="contain" />
			</AspectRatio>
			<Group justify="center" gap={6} mt="xs">
				{sources.map((source, position) => (
					<UnstyledButton
						key={source.src}
						w={8}
						h={8}
						bg={position === index ? "var(--mantine-color-blue-6)" : "var(--mantine-color-gray-4)"}
						style={{ borderRadius: 999 }}
						aria-label={\`Go to item \${position + 1}\`}
						onClick={() => onIndexChange?.(position)}
					/>
				))}
			</Group>
			{current.caption === undefined ? null : (
				<Text size="xs" c="dimmed" ta="center" mt={4}>
					{current.caption}
				</Text>
			)}
		</Box>
	);
}
`,
	},
	{
		suffix: "Menu",
		subjects: ["Post", "Profile", "Thread", "Message", "Media", "Collection", "Moderation", "Account"],
		render: (n) => `import { Menu } from "@mantine/core";
import type { ReactNode } from "react";

export interface ${n}Option {
	id: string;
	label: string;
	/** Renders the option in the destructive colour. */
	danger?: boolean;
}

export interface ${n}Props {
	options: ${n}Option[];
	/** Slot for the element that opens the menu. */
	trigger: ReactNode;
	/** Fired with the id of the option that was chosen. */
	onSelectOption: (id: string) => void;
	position?: "bottom-end" | "bottom-start";
}

export function ${n}({ options, trigger, onSelectOption, position = "bottom-end" }: ${n}Props) {
	return (
		<Menu position={position} shadow="md" width={220} withinPortal>
			<Menu.Target>{trigger}</Menu.Target>
			<Menu.Dropdown>
				{options.map((option) => (
					<Menu.Item
						key={option.id}
						color={option.danger === true ? "red" : "gray"}
						onClick={() => onSelectOption(option.id)}
					>
						{option.label}
					</Menu.Item>
				))}
			</Menu.Dropdown>
		</Menu>
	);
}
`,
	},
	{
		suffix: "Tile",
		subjects: ["Topic", "Space", "Community", "Trend", "Event", "Highlight", "Photo", "Poll", "Article"],
		render: (n) => `import { BackgroundImage, Box, Paper, Text } from "@mantine/core";

export interface ${n}Props {
	title: string;
	/** Small line under the title. */
	caption?: string;
	/** Drawn behind the text when set. */
	imageUrl?: string;
	/** Draws the selected outline. */
	selected?: boolean;
	onActivate?: () => void;
}

export function ${n}({ title, caption = "", imageUrl = "", selected = false, onActivate }: ${n}Props) {
	const content = (
		<Box p="sm">
			<Text fw={600} size="sm" c={imageUrl === "" ? undefined : "white"} truncate>
				{title}
			</Text>
			{caption === "" ? null : (
				<Text size="xs" c={imageUrl === "" ? "dimmed" : "gray.3"} truncate>
					{caption}
				</Text>
			)}
		</Box>
	);

	return (
		<Paper
			withBorder
			radius="md"
			h={120}
			onClick={onActivate}
			style={{
				overflow: "hidden",
				cursor: onActivate ? "pointer" : "default",
				outline: selected ? "2px solid var(--mantine-color-blue-5)" : "none",
			}}
		>
			{imageUrl === "" ? content : <BackgroundImage src={imageUrl} h="100%">{content}</BackgroundImage>}
		</Paper>
	);
}
`,
	},
	{
		suffix: "Summary",
		subjects: ["Thread", "Engagement", "Weekly", "Moderation", "Account", "Poll", "Reach"],
		render: (n) => `import { List, Paper, Text } from "@mantine/core";

const TONE_COLOR: Record<"neutral" | "positive" | "negative", string> = {
	neutral: "gray",
	positive: "teal",
	negative: "red",
};

export interface ${n}Props {
	heading: string;
	/** One bullet per line. */
	lines: string[];
	/** Colour of the left rule. */
	tone?: "neutral" | "positive" | "negative";
}

export function ${n}({ heading, lines, tone = "neutral" }: ${n}Props) {
	return (
		<Paper
			p="sm"
			radius="md"
			style={{ borderLeft: \`3px solid var(--mantine-color-\${TONE_COLOR[tone]}-5)\` }}
			bg="var(--mantine-color-default-hover)"
		>
			<Text fw={600} size="sm" mb={6}>
				{heading}
			</Text>
			<List size="sm" spacing={4}>
				{lines.map((line) => (
					<List.Item key={line}>{line}</List.Item>
				))}
			</List>
		</Paper>
	);
}
`,
	},
	{
		suffix: "Meter",
		subjects: ["Profile", "Storage", "Upload", "Reputation", "Poll", "Streak"],
		render: (n) => `import { Group, Progress, Stack, Text } from "@mantine/core";

export interface ${n}Props {
	label: string;
	value: number;
	/** Value that counts as full. */
	max?: number;
	/** Shows the percentage to the right of the label. */
	showValue?: boolean;
	color?: string;
}

export function ${n}({ label, value, max = 100, showValue = true, color = "blue" }: ${n}Props) {
	const percent = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

	return (
		<Stack gap={4}>
			<Group justify="space-between" gap="xs">
				<Text size="xs" c="dimmed">
					{label}
				</Text>
				{showValue ? (
					<Text size="xs" c="dimmed">
						{percent}%
					</Text>
				) : null}
			</Group>
			<Progress value={percent} color={color} radius="xl" size="sm" />
		</Stack>
	);
}
`,
	},
	{
		suffix: "Filter",
		subjects: ["Date", "Author", "Language", "Media", "Audience", "Keyword", "Tag"],
		render: (n) => `import { Select } from "@mantine/core";

export interface ${n}Option {
	value: string;
	label: string;
}

export interface ${n}Props {
	label: string;
	options: ${n}Option[];
	/** Value of the selected option, or an empty string for none. */
	value: string;
	onValueChange: (value: string) => void;
	/** Shows the clear button once a value is picked. */
	clearable?: boolean;
}

export function ${n}({ label, options, value, onValueChange, clearable = true }: ${n}Props) {
	return (
		<Select
			label={label}
			data={options}
			value={value === "" ? null : value}
			clearable={clearable}
			size="xs"
			radius="sm"
			onChange={(next) => onValueChange(next ?? "")}
		/>
	);
}
`,
	},
	{
		suffix: "Callout",
		subjects: ["Safety", "Privacy", "Tip", "Warning", "Update", "Onboarding"],
		render: (n) => `import { Group, Paper, Text, ThemeIcon } from "@mantine/core";
import type { ReactNode } from "react";

const TONE_COLOR: Record<"info" | "tip" | "warning", string> = {
	info: "blue",
	tip: "grape",
	warning: "orange",
};

export interface ${n}Props {
	title: string;
	/** The body of the callout. */
	children: ReactNode;
	/** Glyph shown in the disc; a dot is used when absent. */
	icon?: ReactNode;
	tone?: "info" | "tip" | "warning";
}

export function ${n}({ title, children, icon, tone = "info" }: ${n}Props) {
	return (
		<Paper withBorder radius="md" p="sm">
			<Group gap="sm" wrap="nowrap" align="flex-start">
				<ThemeIcon variant="light" radius="xl" size="md" color={TONE_COLOR[tone]}>
					{icon ?? <Text size="xs">·</Text>}
				</ThemeIcon>
				<div>
					<Text fw={600} size="sm">
						{title}
					</Text>
					<Text size="sm" c="dimmed">
						{children}
					</Text>
				</div>
			</Group>
		</Paper>
	);
}
`,
	},
	{
		suffix: "Nav",
		subjects: ["Settings", "Profile", "Explore", "Compose", "Workspace"],
		render: (n) => `import { Badge, NavLink, Stack } from "@mantine/core";

export interface ${n}Destination {
	id: string;
	label: string;
	/** Shown as a pill on the right of the row. */
	badge?: number;
}

export interface ${n}Props {
	destinations: ${n}Destination[];
	/** Id of the destination currently open. */
	activeId: string;
	onNavigate: (id: string) => void;
}

export function ${n}({ destinations, activeId, onNavigate }: ${n}Props) {
	return (
		<Stack gap={2}>
			{destinations.map((destination) => (
				<NavLink
					key={destination.id}
					label={destination.label}
					active={destination.id === activeId}
					variant="light"
					rightSection={
						destination.badge === undefined ? null : (
							<Badge size="xs" variant="filled">
								{destination.badge}
							</Badge>
						)
					}
					onClick={() => onNavigate(destination.id)}
				/>
			))}
		</Stack>
	);
}
`,
	},
	{
		suffix: "Chip",
		subjects: ["Topic", "Language", "Audience", "Media", "Person", "Keyword"],
		render: (n) => `import { Chip } from "@mantine/core";

export interface ${n}Props {
	label: string;
	/** Whether the chip is on. */
	selected?: boolean;
	/** Fired with the state the chip is moving to. */
	onToggle?: (selected: boolean) => void;
	size?: "xs" | "sm" | "md";
	color?: string;
}

export function ${n}({ label, selected = false, onToggle, size = "sm", color = "blue" }: ${n}Props) {
	return (
		<Chip checked={selected} size={size} color={color} radius="xl" variant="light" onChange={onToggle}>
			{label}
		</Chip>
	);
}
`,
	},
	{
		suffix: "Feed",
		subjects: ["Mention", "Bookmark", "Media", "Reply", "Quote", "Collection"],
		render: (n) => `import { Card, Group, Skeleton, Stack, Text, UnstyledButton } from "@mantine/core";
import type { PostModel } from "~/models";

export interface ${n}Props {
	posts: PostModel[];
	/** Replaces the list with placeholders. */
	loading?: boolean;
	/** Text shown when there is nothing to list. */
	emptyLabel?: string;
	onPostSelect?: (id: string) => void;
}

export function ${n}({ posts, loading = false, emptyLabel = "No posts yet", onPostSelect }: ${n}Props) {
	if (loading) {
		return (
			<Stack gap="sm">
				{[0, 1, 2].map((index) => (
					<Skeleton key={index} height={72} radius="md" />
				))}
			</Stack>
		);
	}

	if (posts.length === 0) {
		return (
			<Text size="sm" c="dimmed" ta="center" py="md">
				{emptyLabel}
			</Text>
		);
	}

	return (
		<Stack gap="sm">
			{posts.map((post) => (
				<Card key={post.id} withBorder radius="md" padding="sm">
					<UnstyledButton w="100%" onClick={() => onPostSelect?.(post.id)}>
						<Group gap={6} wrap="nowrap">
							<Text size="xs" fw={600}>
								{post.author.displayName}
							</Text>
							<Text size="xs" c="dimmed" truncate>
								@{post.author.handle}
							</Text>
						</Group>
						<Text size="sm" lineClamp={2}>
							{post.body}
						</Text>
					</UnstyledButton>
				</Card>
			))}
		</Stack>
	);
}
`,
	},
	{
		suffix: "Prompt",
		subjects: ["Delete", "Block", "Report", "Logout", "Discard", "Publish"],
		render: (n) => `import { Button, Group, Paper, Stack, Text } from "@mantine/core";

export interface ${n}Props {
	title: string;
	/** Sentence explaining the consequence. */
	description?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	/** Colours the confirm button red. */
	destructive?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export function ${n}({
	title,
	description = "",
	confirmLabel = "Confirm",
	cancelLabel = "Cancel",
	destructive = false,
	onConfirm,
	onCancel,
}: ${n}Props) {
	return (
		<Paper withBorder radius="md" p="md">
			<Stack gap="sm">
				<Text fw={600}>{title}</Text>
				{description === "" ? null : (
					<Text size="sm" c="dimmed">
						{description}
					</Text>
				)}
				<Group justify="flex-end" gap="xs">
					<Button variant="default" size="xs" onClick={onCancel}>
						{cancelLabel}
					</Button>
					<Button color={destructive ? "red" : "blue"} size="xs" onClick={onConfirm}>
						{confirmLabel}
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
}
`,
	},
];

// Round-robin so that the M host's shorter list still spans every archetype.
const plan = [];
const depth = Math.max(...archetypes.map((a) => a.subjects.length));
for (let i = 0; i < depth; i++) {
	for (const archetype of archetypes) {
		const subject = archetype.subjects[i];
		if (subject === undefined) continue;
		const name = `${subject}${archetype.suffix}`;
		if (RESERVED.has(name)) continue;
		// The big archetypes alternate between two shapes. A real system of this size does not
		// hold one row component for fifteen contexts without someone writing a second one.
		const render = i % 2 === 1 && archetype.renderAlt ? archetype.renderAlt : archetype.render;
		plan.push({ name, code: render(name) });
	}
}

if (plan.length < count) {
	console.error(`only ${plan.length} components available, ${count} requested`);
	process.exit(1);
}

const outDir = join(hostDir, "src", "components");
mkdirSync(outDir, { recursive: true });
for (const { name, code } of plan.slice(0, count)) {
	writeFileSync(join(outDir, `${kebab(name)}.tsx`), code);
}

console.log(`wrote ${count} components to ${outDir}`);
