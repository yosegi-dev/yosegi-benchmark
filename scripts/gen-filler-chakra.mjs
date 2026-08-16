// Emits the product-surface components that bring a Chakra host up to its target size.
//
// The 20 contract components and the hand-written near-miss families are copied in first;
// this fills the remainder. Every emitted component is real code on Chakra v3 that compiles
// and could ship, and nothing marks it apart from the rest of src/components — no naming
// convention, no directory, no comment. See docs/SCALE.md.
//
// Usage: node scripts/gen-filler-chakra.mjs hosts/chakra-m 80

import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [hostDir, targetRaw] = process.argv.slice(2);
if (!hostDir || !targetRaw) {
	console.error("usage: node scripts/gen-filler-chakra.mjs <hostDir> <targetTotal>");
	process.exit(1);
}
const target = Number(targetRaw);
const outDir = join(hostDir, "src", "components");
if (!existsSync(outDir)) {
	console.error(`no such directory: ${outDir}`);
	process.exit(1);
}

const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const lower = (subject) => subject.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();

// Domain nouns. Paired with a form below to make a name a product would plausibly own.
const subjects = [
	"Notification", "Message", "Mention", "Bookmark", "Space", "Room", "Moderation", "Report",
	"Block", "Mute", "Draft", "Schedule", "Poll", "Hashtag", "Topic", "Community", "Membership",
	"Invite", "Follower", "Following", "Profile", "Banner", "Bio", "Highlight", "Pin", "Thread",
	"Conversation", "Digest", "Analytics", "Engagement", "Reach", "Impression", "Audience",
	"Subscription", "Billing", "Payment", "Payout", "Verification", "Label", "Filter", "Keyword",
	"Language", "Privacy", "Security", "Session", "Device", "Login", "Password", "Recovery",
	"Export", "Import", "Archive", "Media", "Video", "Audio", "Gallery", "Album", "Sticker",
	"Emoji", "Reaction", "Tip", "Gift", "Boost", "Campaign", "Creator", "Studio", "Insight",
	"History", "Suggestion", "Onboarding", "Welcome", "Tour", "Shortcut", "Accessibility",
	"Theme", "Appearance", "Font", "Timezone", "Region", "Connection", "Sync", "Webhook",
	"Token", "Integration", "Plugin", "Automation", "Rule", "Queue", "Retry", "Incident",
	"Maintenance", "Changelog", "Release", "Feedback", "Survey", "Review", "Support", "Ticket",
	"Guide", "Embed", "Preview", "Share", "Download", "Upload", "Attachment", "Folder",
	"Storage", "Quota", "Usage", "Limit", "Plan", "Upgrade", "Trial", "Coupon", "Referral",
	"Reward", "Streak", "Level", "Achievement", "Discovery", "Explore", "Collection", "Series",
	"Episode", "Broadcast", "Replay", "Transcript", "Caption", "Translation", "Consent",
];

const palettes = ["gray", "blue", "green", "purple", "orange", "teal", "pink", "cyan"];

// Each template owns a form suffix, the Chakra surface it is built on, and the prop shape it
// exposes. The spread across templates is what gives the filler its variety: enums here,
// ReactNode slots there, domain models in a few, arrays of records in others.
const templates = [
	{
		suffix: "Stat",
		render: ({ name, subject, palette }) => `import { Card, Stat } from "@chakra-ui/react";

export interface ${name}Props {
	/** Metric name shown above the value. */
	label: string;
	/** The already-formatted ${lower(subject)} figure. */
	value: string;
	/** Percentage change against the previous period. */
	delta?: number;
	/** Which way the change is read. */
	trend?: "up" | "down" | "flat";
	/** Controls the tile padding. */
	size?: "sm" | "md";
}

export function ${name}({ label, value, delta, trend = "flat", size = "md" }: ${name}Props) {
	return (
		<Card.Root size={size} variant="subtle" colorPalette="${palette}">
			<Card.Body>
				<Stat.Root size={size}>
					<Stat.Label>{label}</Stat.Label>
					<Stat.ValueText>{value}</Stat.ValueText>
					{delta === undefined ? null : (
						<Stat.HelpText>
							{trend === "up" ? <Stat.UpIndicator /> : null}
							{trend === "down" ? <Stat.DownIndicator /> : null}
							{delta}%
						</Stat.HelpText>
					)}
				</Stat.Root>
			</Card.Body>
		</Card.Root>
	);
}
`,
	},
	{
		suffix: "Banner",
		render: ({ name, subject }) => `import { Alert, Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Headline of the ${lower(subject)} notice. */
	title: string;
	/** Supporting sentence under the headline. */
	description?: string;
	/** Picks the icon and the colour of the banner. */
	status?: "info" | "warning" | "success" | "error";
	/** Rendered at the end of the banner — a link, a button, anything trailing. */
	action?: ReactNode;
	/** When set, a dismiss button is shown. */
	onDismiss?: () => void;
}

export function ${name}({ title, description, status = "info", action, onDismiss }: ${name}Props) {
	return (
		<Alert.Root status={status} variant="subtle" size="sm">
			<Alert.Indicator />
			<Alert.Content>
				<Alert.Title>{title}</Alert.Title>
				{description ? <Alert.Description>{description}</Alert.Description> : null}
			</Alert.Content>
			{action}
			{onDismiss ? (
				<Button size="xs" variant="plain" onClick={onDismiss}>
					Dismiss
				</Button>
			) : null}
		</Alert.Root>
	);
}
`,
	},
	{
		suffix: "SettingRow",
		render: ({ name, subject }) => `import { HStack, Stack, Switch, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Name of the ${lower(subject)} setting. */
	label: string;
	/** One line explaining what turning it on does. */
	description?: string;
	/** Current state of the switch. */
	enabled: boolean;
	/** Fired with the state the switch is moving to. */
	onToggle: (enabled: boolean) => void;
	/** Rendered next to the label — a "new" tag, a plan requirement, and the like. */
	badge?: ReactNode;
}

export function ${name}({ label, description, enabled, onToggle, badge }: ${name}Props) {
	return (
		<HStack justify="space-between" align="start" gap="4" py="2">
			<Stack gap="0.5" minW="0">
				<HStack gap="2">
					<Text fontWeight="medium">{label}</Text>
					{badge}
				</HStack>
				{description ? (
					<Text fontSize="sm" color="fg.muted">
						{description}
					</Text>
				) : null}
			</Stack>
			<Switch.Root
				checked={enabled}
				size="md"
				onCheckedChange={(details) => onToggle(details.checked)}
			>
				<Switch.HiddenInput />
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
			</Switch.Root>
		</HStack>
	);
}
`,
	},
	{
		suffix: "Checklist",
		render: ({ name, subject, palette }) => `import { Checkbox, Stack } from "@chakra-ui/react";

export interface ${name}Props {
	/** The ${lower(subject)} options, in display order. */
	items: { id: string; label: string }[];
	/** Ids of the options currently ticked. */
	checkedIds: string[];
	/** Fired with the id of the option that was toggled. */
	onItemToggle: (id: string) => void;
	/** Controls the control size. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ items, checkedIds, onItemToggle, size = "md" }: ${name}Props) {
	return (
		<Stack gap="2">
			{items.map((item) => (
				<Checkbox.Root
					key={item.id}
					size={size}
					colorPalette="${palette}"
					checked={checkedIds.includes(item.id)}
					onCheckedChange={() => onItemToggle(item.id)}
				>
					<Checkbox.HiddenInput />
					<Checkbox.Control>
						<Checkbox.Indicator />
					</Checkbox.Control>
					<Checkbox.Label>{item.label}</Checkbox.Label>
				</Checkbox.Root>
			))}
		</Stack>
	);
}
`,
	},
	{
		suffix: "Meter",
		render: ({ name, subject }) => `import { Progress } from "@chakra-ui/react";
import type { ReactNode } from "react";

const tonePalette = {
	neutral: "gray",
	positive: "green",
	warning: "orange",
	critical: "red",
} as const;

export interface ${name}Props {
	/** Name of the ${lower(subject)} measure. */
	label: string;
	/** Current value, between 0 and \`max\`. */
	value: number;
	/** Upper bound of the track. */
	max?: number;
	/** Picks the colour of the filled range. */
	tone?: "neutral" | "positive" | "warning" | "critical";
	/** Rendered under the track. */
	caption?: ReactNode;
}

export function ${name}({ label, value, max = 100, tone = "neutral", caption }: ${name}Props) {
	return (
		<Progress.Root value={value} max={max} size="sm" colorPalette={tonePalette[tone]}>
			<Progress.Label>{label}</Progress.Label>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
			{caption}
		</Progress.Root>
	);
}
`,
	},
	{
		suffix: "EmptyState",
		render: ({ name, subject }) => `import { EmptyState, Icon } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Headline shown when there is no ${lower(subject)} to display. */
	title: string;
	/** One line telling the reader what to do about it. */
	description?: string;
	/** Rendered under the description — usually a call to action. */
	action?: ReactNode;
	/** Controls the spacing and the icon size. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ title, description, action, size = "md" }: ${name}Props) {
	return (
		<EmptyState.Root size={size}>
			<EmptyState.Content>
				<EmptyState.Indicator>
					<Icon viewBox="0 0 24 24" boxSize="8">
						<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
						<path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
					</Icon>
				</EmptyState.Indicator>
				<EmptyState.Title>{title}</EmptyState.Title>
				{description ? <EmptyState.Description>{description}</EmptyState.Description> : null}
				{action}
			</EmptyState.Content>
		</EmptyState.Root>
	);
}
`,
	},
	{
		suffix: "TagRow",
		render: ({ name, subject, palette }) => `import { Tag, Wrap } from "@chakra-ui/react";

export interface ${name}Props {
	/** The ${lower(subject)} tags to show, in display order. */
	tags: { id: string; label: string }[];
	/** Adds a close trigger to every tag. */
	removable?: boolean;
	/** Fired with the id of the tag that was removed. */
	onTagRemove?: (id: string) => void;
	/** Controls the tag height. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ tags, removable = false, onTagRemove, size = "md" }: ${name}Props) {
	return (
		<Wrap gap="2">
			{tags.map((tag) => (
				<Tag.Root key={tag.id} size={size} variant="subtle" colorPalette="${palette}">
					<Tag.Label>{tag.label}</Tag.Label>
					{removable ? <Tag.CloseTrigger onClick={() => onTagRemove?.(tag.id)} /> : null}
				</Tag.Root>
			))}
		</Wrap>
	);
}
`,
	},
	{
		suffix: "Accordion",
		render: ({ name, subject }) => `import { Accordion, Text } from "@chakra-ui/react";

export interface ${name}Props {
	/** The ${lower(subject)} sections, in display order. */
	sections: { id: string; title: string; body: string }[];
	/** Id of the section that starts open. */
	defaultOpenId?: string;
	/** Allows every section to be closed at once. */
	collapsible?: boolean;
}

export function ${name}({ sections, defaultOpenId, collapsible = true }: ${name}Props) {
	return (
		<Accordion.Root
			collapsible={collapsible}
			variant="outline"
			defaultValue={defaultOpenId ? [defaultOpenId] : []}
		>
			{sections.map((section) => (
				<Accordion.Item key={section.id} value={section.id}>
					<Accordion.ItemTrigger>
						<Text flex="1" textAlign="start" fontWeight="medium">
							{section.title}
						</Text>
						<Accordion.ItemIndicator />
					</Accordion.ItemTrigger>
					<Accordion.ItemContent>
						<Accordion.ItemBody>{section.body}</Accordion.ItemBody>
					</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
}
`,
	},
	{
		suffix: "Timeline",
		render: ({ name, subject }) => `import { Timeline } from "@chakra-ui/react";

export interface ${name}Props {
	/** The ${lower(subject)} entries, newest first. */
	entries: { id: string; title: string; description: string; marker: string }[];
	/** Controls the indicator size and the spacing between entries. */
	size?: "sm" | "md" | "lg";
	/** Draws the indicators filled rather than outlined. */
	solid?: boolean;
}

export function ${name}({ entries, size = "md", solid = false }: ${name}Props) {
	return (
		<Timeline.Root size={size} variant={solid ? "solid" : "subtle"}>
			{entries.map((entry) => (
				<Timeline.Item key={entry.id}>
					<Timeline.Connector>
						<Timeline.Separator />
						<Timeline.Indicator>{entry.marker}</Timeline.Indicator>
					</Timeline.Connector>
					<Timeline.Content>
						<Timeline.Title>{entry.title}</Timeline.Title>
						<Timeline.Description>{entry.description}</Timeline.Description>
					</Timeline.Content>
				</Timeline.Item>
			))}
		</Timeline.Root>
	);
}
`,
	},
	{
		suffix: "Summary",
		render: ({ name, subject }) => `import { DataList, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** The ${lower(subject)} facts, in display order. */
	rows: { label: string; value: string }[];
	/** Stacks the label above the value when vertical. */
	orientation?: "horizontal" | "vertical";
	/** Rendered under the list. */
	footer?: ReactNode;
	/** Controls the row height. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ rows, orientation = "horizontal", footer, size = "md" }: ${name}Props) {
	return (
		<Stack gap="3">
			<DataList.Root orientation={orientation} size={size}>
				{rows.map((row) => (
					<DataList.Item key={row.label}>
						<DataList.ItemLabel>{row.label}</DataList.ItemLabel>
						<DataList.ItemValue>{row.value}</DataList.ItemValue>
					</DataList.Item>
				))}
			</DataList.Root>
			{footer}
		</Stack>
	);
}
`,
	},
	{
		suffix: "StatusChip",
		render: ({ name, subject }) => `import { Status } from "@chakra-ui/react";

const statePalette = {
	online: "green",
	idle: "yellow",
	offline: "gray",
	error: "red",
} as const;

export interface ${name}Props {
	/** Current ${lower(subject)} state; picks the dot colour. */
	state: "online" | "idle" | "offline" | "error";
	/** Text shown after the dot. */
	label: string;
	/** Controls the dot and text size. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ state, label, size = "md" }: ${name}Props) {
	return (
		<Status.Root size={size} colorPalette={statePalette[state]}>
			<Status.Indicator />
			{label}
		</Status.Root>
	);
}
`,
	},
	{
		suffix: "Breadcrumb",
		render: ({ name, subject }) => `import { Breadcrumb } from "@chakra-ui/react";

export interface ${name}Props {
	/** The ancestor ${lower(subject)} links, outermost first. */
	path: { href: string; label: string }[];
	/** Label of the page being viewed; rendered as the last, unlinked crumb. */
	current: string;
	/** Controls the text size. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ path, current, size = "md" }: ${name}Props) {
	return (
		<Breadcrumb.Root size={size}>
			<Breadcrumb.List>
				{path.map((crumb) => (
					<Breadcrumb.Item key={crumb.href}>
						<Breadcrumb.Link href={crumb.href}>{crumb.label}</Breadcrumb.Link>
						<Breadcrumb.Separator />
					</Breadcrumb.Item>
				))}
				<Breadcrumb.Item>
					<Breadcrumb.CurrentLink>{current}</Breadcrumb.CurrentLink>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	);
}
`,
	},
	{
		suffix: "Rating",
		render: ({ name, subject, palette }) => `import { HStack, RatingGroup } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** How many stars are filled. */
	value: number;
	/** How many stars are drawn in total. */
	count?: number;
	/** Rendered after the stars — the ${lower(subject)} sample size, usually. */
	caption?: ReactNode;
	/** Fired with the star the reader picked; omit to render a read-only display. */
	onRatingChange?: (value: number) => void;
}

export function ${name}({ value, count = 5, caption, onRatingChange }: ${name}Props) {
	return (
		<HStack gap="2">
			<RatingGroup.Root
				count={count}
				value={value}
				size="sm"
				colorPalette="${palette}"
				readOnly={onRatingChange === undefined}
				onValueChange={(details) => onRatingChange?.(details.value)}
			>
				<RatingGroup.HiddenInput />
				<RatingGroup.Control>
					<RatingGroup.Items />
				</RatingGroup.Control>
			</RatingGroup.Root>
			{caption}
		</HStack>
	);
}
`,
	},
	{
		suffix: "Steps",
		render: ({ name, subject }) => `import { Steps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** The ${lower(subject)} steps, in order. */
	steps: { id: string; title: string; description?: string }[];
	/** Zero-based position of the step being worked on. */
	current: number;
	/** Rendered under the step list. */
	content?: ReactNode;
	/** Controls the indicator size. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ steps, current, content, size = "md" }: ${name}Props) {
	return (
		<Steps.Root count={steps.length} step={current} size={size}>
			<Steps.List>
				{steps.map((step, index) => (
					<Steps.Item key={step.id} index={index}>
						<Steps.Trigger>
							<Steps.Indicator />
							<Steps.Title>{step.title}</Steps.Title>
						</Steps.Trigger>
						<Steps.Separator />
					</Steps.Item>
				))}
			</Steps.List>
			{content ? <Steps.Content index={current}>{content}</Steps.Content> : null}
		</Steps.Root>
	);
}
`,
	},
	{
		suffix: "Table",
		render: ({ name, subject }) => `import { Table } from "@chakra-ui/react";

export interface ${name}Props {
	/** Column keys and their headers, in display order. */
	columns: { key: string; label: string }[];
	/** One record per row, keyed by the column keys. */
	rows: Record<string, string>[];
	/** Rendered under the table as a caption. */
	caption?: string;
	/** Controls the cell padding. */
	size?: "sm" | "md" | "lg";
	/** Shades alternate rows. */
	striped?: boolean;
}

export function ${name}({ columns, rows, caption, size = "md", striped = false }: ${name}Props) {
	return (
		<Table.Root size={size} variant="line" striped={striped}>
			{caption ? <Table.Caption>{caption}</Table.Caption> : null}
			<Table.Header>
				<Table.Row>
					{columns.map((column) => (
						<Table.ColumnHeader key={column.key}>{column.label}</Table.ColumnHeader>
					))}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{rows.map((row, index) => (
					<Table.Row key={index}>
						{columns.map((column) => (
							<Table.Cell key={column.key}>{row[column.key]}</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	);
}
`,
	},
	{
		suffix: "BulletList",
		render: ({ name, subject }) => `import { List, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** The ${lower(subject)} lines, in display order. */
	items: string[];
	/** Marker draws a bullet; plain leaves the line flush. */
	variant?: "marker" | "plain";
	/** Rendered under the list. */
	trailing?: ReactNode;
}

export function ${name}({ items, variant = "marker", trailing }: ${name}Props) {
	return (
		<Stack gap="2">
			<List.Root variant={variant} gap="1">
				{items.map((item) => (
					<List.Item key={item}>{item}</List.Item>
				))}
			</List.Root>
			{trailing}
		</Stack>
	);
}
`,
	},
	{
		suffix: "Quote",
		render: ({ name, subject, palette }) => `import { Blockquote } from "@chakra-ui/react";

export interface ${name}Props {
	/** The quoted ${lower(subject)} text. */
	quote: string;
	/** Who said it; rendered as the caption. */
	attribution?: string;
	/** Accent draws the coloured bar; neutral leaves it grey. */
	tone?: "neutral" | "accent";
}

export function ${name}({ quote, attribution, tone = "neutral" }: ${name}Props) {
	return (
		<Blockquote.Root variant="subtle" colorPalette={tone === "accent" ? "${palette}" : "gray"}>
			<Blockquote.Content>{quote}</Blockquote.Content>
			{attribution ? <Blockquote.Caption>{attribution}</Blockquote.Caption> : null}
		</Blockquote.Root>
	);
}
`,
	},
	{
		suffix: "Disclosure",
		render: ({ name, subject }) => `import { Box, Button, Collapsible } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Label of the trigger that reveals the ${lower(subject)} detail. */
	title: string;
	/** Revealed when the disclosure is open. */
	children: ReactNode;
	/** Starts the disclosure open. */
	defaultOpen?: boolean;
}

export function ${name}({ title, children, defaultOpen = false }: ${name}Props) {
	return (
		<Collapsible.Root defaultOpen={defaultOpen}>
			<Collapsible.Trigger asChild>
				<Button size="sm" variant="ghost" width="full" justifyContent="start">
					{title}
				</Button>
			</Collapsible.Trigger>
			<Collapsible.Content>
				<Box px="3" py="2">
					{children}
				</Box>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
`,
	},
	{
		suffix: "Range",
		render: ({ name, subject, palette }) => `import { Slider } from "@chakra-ui/react";

export interface ${name}Props {
	/** Name of the ${lower(subject)} setting. */
	label: string;
	/** Current value, between \`min\` and \`max\`. */
	value: number;
	/** Lower bound of the track. */
	min?: number;
	/** Upper bound of the track. */
	max?: number;
	/** Fired with the value the thumb landed on. */
	onRangeChange: (value: number) => void;
}

export function ${name}({ label, value, min = 0, max = 100, onRangeChange }: ${name}Props) {
	return (
		<Slider.Root
			value={[value]}
			min={min}
			max={max}
			size="sm"
			colorPalette="${palette}"
			onValueChange={(details) => onRangeChange(details.value[0] ?? min)}
		>
			<Slider.Label>{label}</Slider.Label>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumbs />
			</Slider.Control>
		</Slider.Root>
	);
}
`,
	},
	{
		suffix: "ChoiceGroup",
		render: ({ name, subject, palette }) => `import { RadioGroup, Stack, Text } from "@chakra-ui/react";

export interface ${name}Props {
	/** Name of the ${lower(subject)} choice. */
	label: string;
	/** Value of the option currently selected. */
	value: string;
	/** The options to offer, in display order. */
	options: { value: string; label: string }[];
	/** Fired with the value of the option that was picked. */
	onSelect: (value: string) => void;
}

export function ${name}({ label, value, options, onSelect }: ${name}Props) {
	return (
		<Stack gap="2">
			<Text fontWeight="medium">{label}</Text>
			<RadioGroup.Root
				value={value}
				size="sm"
				colorPalette="${palette}"
				onValueChange={(details) => {
					if (details.value !== null) onSelect(details.value);
				}}
			>
				<Stack gap="2">
					{options.map((option) => (
						<RadioGroup.Item key={option.value} value={option.value}>
							<RadioGroup.ItemHiddenInput />
							<RadioGroup.ItemIndicator />
							<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
						</RadioGroup.Item>
					))}
				</Stack>
			</RadioGroup.Root>
		</Stack>
	);
}
`,
	},
	{
		suffix: "Field",
		render: ({ name, subject }) => `import { Field, Input } from "@chakra-ui/react";

export interface ${name}Props {
	/** Name of the ${lower(subject)} input. */
	label: string;
	/** Current text; the input is fully controlled. */
	value: string;
	/** Rendered under the input in muted text. */
	helper?: string;
	/** Replaces the helper text and turns the field red. */
	error?: string;
	/** Marks the field required and shows the indicator. */
	required?: boolean;
	/** Fired with the next text on every keystroke. */
	onValueChange: (value: string) => void;
}

export function ${name}({ label, value, helper, error, required = false, onValueChange }: ${name}Props) {
	return (
		<Field.Root required={required} invalid={error !== undefined}>
			<Field.Label>
				{label}
				<Field.RequiredIndicator />
			</Field.Label>
			<Input
				value={value}
				size="sm"
				onChange={(event) => onValueChange(event.currentTarget.value)}
			/>
			{error === undefined ? (
				helper ? <Field.HelperText>{helper}</Field.HelperText> : null
			) : (
				<Field.ErrorText>{error}</Field.ErrorText>
			)}
		</Field.Root>
	);
}
`,
	},
	{
		suffix: "Gauge",
		render: ({ name, subject, palette }) => `import { HStack, ProgressCircle, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Name of the ${lower(subject)} measure. */
	label: string;
	/** Current value, from 0 to 100. */
	value: number;
	/** Rendered under the label. */
	caption?: ReactNode;
	/** Controls the ring diameter. */
	size?: "xs" | "sm" | "md" | "lg";
}

export function ${name}({ label, value, caption, size = "md" }: ${name}Props) {
	return (
		<HStack gap="3">
			<ProgressCircle.Root value={value} size={size} colorPalette="${palette}">
				<ProgressCircle.Circle>
					<ProgressCircle.Track />
					<ProgressCircle.Range />
				</ProgressCircle.Circle>
			</ProgressCircle.Root>
			<Stack gap="0">
				<Text fontWeight="medium">{label}</Text>
				{caption}
			</Stack>
		</HStack>
	);
}
`,
	},
	{
		suffix: "Placeholder",
		render: ({ name, subject }) => `import { HStack, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

export interface ${name}Props {
	/** How many ${lower(subject)} rows to fake. */
	rows?: number;
	/** Reserves a circle where the avatar would go. */
	showAvatar?: boolean;
	/** Reserves a block where an attachment would go. */
	showMedia?: boolean;
}

export function ${name}({ rows = 3, showAvatar = true, showMedia = false }: ${name}Props) {
	return (
		<Stack gap="3">
			<HStack gap="3">
				{showAvatar ? <SkeletonCircle size="8" /> : null}
				<SkeletonText noOfLines={1} width="30%" />
			</HStack>
			<SkeletonText noOfLines={rows} gap="2" />
			{showMedia ? <Skeleton height="40" borderRadius="l2" /> : null}
		</Stack>
	);
}
`,
	},
	{
		suffix: "Viewer",
		render: ({ name, subject }) => `import { AspectRatio, Box, Float, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** The ${lower(subject)} asset to display. */
	source: { url: string; alt: string };
	/** Width divided by height. */
	ratio?: number;
	/** Rendered over the bottom of the frame. */
	overlay?: ReactNode;
	/** When set, a close button is drawn in the corner. */
	onClose?: () => void;
}

export function ${name}({ source, ratio = 16 / 9, overlay, onClose }: ${name}Props) {
	return (
		<Box position="relative" borderRadius="l2" overflow="hidden">
			<AspectRatio ratio={ratio}>
				<Image src={source.url} alt={source.alt} objectFit="cover" bg="bg.muted" />
			</AspectRatio>
			{overlay ? (
				<Box position="absolute" insetX="0" bottom="0" bg="bg/80" px="3" py="2">
					<Text fontSize="sm">{overlay}</Text>
				</Box>
			) : null}
			{onClose ? (
				<Float placement="top-end" offsetX="3" offsetY="3">
					<IconButton aria-label="Close" size="xs" variant="solid" onClick={onClose}>
						<Icon viewBox="0 0 24 24" boxSize="4">
							<path
								d="M6 6l12 12M18 6 6 18"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</Icon>
					</IconButton>
				</Float>
			) : null}
		</Box>
	);
}
`,
	},
	{
		suffix: "PeopleStrip",
		render: ({ name, subject }) => `import { Avatar, AvatarGroup, HStack, Text } from "@chakra-ui/react";
import type { AuthorModel } from "~/models";

export interface ${name}Props {
	/** The accounts involved in this ${lower(subject)}, in display order. */
	people: AuthorModel[];
	/** How many avatars to show before collapsing the rest. */
	max?: number;
	/** Rendered after the avatars. */
	caption?: string;
	/** Controls the avatar size. */
	size?: "xs" | "sm" | "md";
}

export function ${name}({ people, max = 4, caption, size = "xs" }: ${name}Props) {
	const shown = people.slice(0, max);
	const overflow = people.length - shown.length;
	return (
		<HStack gap="2">
			<AvatarGroup size={size} stacking="last-on-top">
				{shown.map((person) => (
					<Avatar.Root key={person.id} variant="subtle" colorPalette="gray">
						<Avatar.Fallback name={person.displayName} />
						<Avatar.Image src={person.avatarUrl} alt={person.displayName} />
					</Avatar.Root>
				))}
			</AvatarGroup>
			{caption ? (
				<Text fontSize="sm" color="fg.muted">
					{caption}
					{overflow > 0 ? " and " + overflow + " more" : ""}
				</Text>
			) : null}
		</HStack>
	);
}
`,
	},
	{
		suffix: "Toolbar",
		render: ({ name, subject }) => `import { HStack, Separator } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** The main ${lower(subject)} controls. */
	primary: ReactNode;
	/** Controls pushed to the far side, after a divider. */
	secondary?: ReactNode;
	/** Where the toolbar sits along its row. */
	align?: "start" | "center" | "end";
	/** Draws a border and a background behind the row. */
	bordered?: boolean;
}

export function ${name}({ primary, secondary, align = "start", bordered = true }: ${name}Props) {
	return (
		<HStack
			gap="2"
			justify={align}
			px={bordered ? "3" : "0"}
			py={bordered ? "2" : "0"}
			bg={bordered ? "bg" : "transparent"}
			borderWidth={bordered ? "1px" : "0"}
			borderRadius="l2"
		>
			{primary}
			{secondary ? (
				<>
					<Separator orientation="vertical" height="5" />
					{secondary}
				</>
			) : null}
		</HStack>
	);
}
`,
	},
	{
		suffix: "Tabs",
		render: ({ name, subject }) => `import { Tabs } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** The ${lower(subject)} panels, in display order. */
	panels: { value: string; label: string; content: ReactNode }[];
	/** Value of the panel currently shown. */
	activeValue: string;
	/** Fired with the value of the panel the user moved to. */
	onSelect: (value: string) => void;
	/** Controls the tab height. */
	size?: "sm" | "md" | "lg";
}

export function ${name}({ panels, activeValue, onSelect, size = "md" }: ${name}Props) {
	return (
		<Tabs.Root
			value={activeValue}
			size={size}
			variant="enclosed"
			onValueChange={(details) => onSelect(details.value)}
		>
			<Tabs.List>
				{panels.map((panel) => (
					<Tabs.Trigger key={panel.value} value={panel.value}>
						{panel.label}
					</Tabs.Trigger>
				))}
			</Tabs.List>
			{panels.map((panel) => (
				<Tabs.Content key={panel.value} value={panel.value}>
					{panel.content}
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}
`,
	},
	{
		suffix: "Editor",
		render: ({ name, subject }) => `import { HStack, Stack, Text, Textarea } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Name of the ${lower(subject)} field. */
	label: string;
	/** Current text; the textarea is fully controlled. */
	value: string;
	/** Caps the input and drives the counter. */
	maxLength?: number;
	/** Rendered in the footer, opposite the counter. */
	footer?: ReactNode;
	/** Fired with the next text on every keystroke. */
	onValueChange: (value: string) => void;
}

export function ${name}({ label, value, maxLength = 280, footer, onValueChange }: ${name}Props) {
	return (
		<Stack gap="2">
			<Text fontWeight="medium">{label}</Text>
			<Textarea
				value={value}
				maxLength={maxLength}
				size="sm"
				autoresize
				rows={3}
				onChange={(event) => onValueChange(event.currentTarget.value)}
			/>
			<HStack justify="space-between">
				{footer}
				<Text fontSize="xs" color="fg.muted" ms="auto">
					{value.length} / {maxLength}
				</Text>
			</HStack>
		</Stack>
	);
}
`,
	},
	{
		suffix: "Profile",
		render: ({ name, subject }) => `import { Avatar, Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface ${name}Props {
	/** The account this ${lower(subject)} block describes. */
	author: AuthorModel;
	/** The account's own description. */
	bio?: string;
	/** Absolute URL of the header image drawn above the avatar. */
	bannerUrl?: string;
	/** Rendered under the bio — follower counts, joined date, and the like. */
	stats?: ReactNode;
}

export function ${name}({ author, bio, bannerUrl, stats }: ${name}Props) {
	return (
		<Card.Root size="md" variant="outline" overflow="hidden">
			{bannerUrl ? <Box height="24" bgImage={"url(" + bannerUrl + ")"} bgSize="cover" /> : null}
			<Card.Body>
				<Stack gap="3">
					<HStack gap="3">
						<Avatar.Root size="lg" variant="subtle" colorPalette="gray">
							<Avatar.Fallback name={author.displayName} />
							<Avatar.Image src={author.avatarUrl} alt={author.displayName} />
						</Avatar.Root>
						<Stack gap="0" minW="0">
							<Text fontWeight="semibold" truncate>
								{author.displayName}
							</Text>
							<Text color="fg.muted" fontSize="sm" truncate>
								@{author.handle}
							</Text>
						</Stack>
					</HStack>
					{bio ? <Text fontSize="sm">{bio}</Text> : null}
					{stats}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
`,
	},
	{
		suffix: "Card",
		render: ({ name, subject, palette }) => `import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ${name}Props {
	/** Title of the ${lower(subject)} card. */
	heading: string;
	/** One line under the title. */
	subheading?: string;
	/** The card's rows. */
	items: ReactNode;
	/** Rendered at the bottom of the card. */
	footer?: ReactNode;
	/** Accent tints the card; plain leaves it neutral. */
	tone?: "plain" | "accent";
}

export function ${name}({ heading, subheading, items, footer, tone = "plain" }: ${name}Props) {
	return (
		<Card.Root
			size="md"
			variant={tone === "accent" ? "subtle" : "outline"}
			colorPalette={tone === "accent" ? "${palette}" : "gray"}
		>
			<Card.Header pb="2">
				<Heading size="sm">{heading}</Heading>
				{subheading ? (
					<Text fontSize="sm" color="fg.muted">
						{subheading}
					</Text>
				) : null}
			</Card.Header>
			<Card.Body pt="0">
				<Stack gap="2">{items}</Stack>
			</Card.Body>
			{footer ? <Card.Footer>{footer}</Card.Footer> : null}
		</Card.Root>
	);
}
`,
	},
	{
		suffix: "Preview",
		render: ({ name, subject }) => `import { Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { PostModel } from "~/models";

export interface ${name}Props {
	/** The post this ${lower(subject)} preview stands for. */
	post: PostModel;
	/** Draws the reply, repost and like counts under the body. */
	showCounts?: boolean;
	/** Rendered under the counts. */
	footer?: ReactNode;
	/** Caps the body at this many lines. */
	clampLines?: number;
}

export function ${name}({ post, showCounts = true, footer, clampLines = 3 }: ${name}Props) {
	return (
		<Card.Root size="sm" variant="subtle">
			<Card.Body>
				<Stack gap="2">
					<Text fontSize="sm" fontWeight="medium" truncate>
						{post.author.displayName}
					</Text>
					<Text fontSize="sm" lineClamp={clampLines}>
						{post.body}
					</Text>
					{showCounts ? (
						<HStack gap="4" fontSize="xs" color="fg.muted">
							<Text>{post.replyCount} replies</Text>
							<Text>{post.repostCount} reposts</Text>
							<Text>{post.likeCount} likes</Text>
						</HStack>
					) : null}
					{footer}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
`,
	},
	{
		suffix: "Highlight",
		render: ({ name, subject, palette }) => `import { Badge, Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { TrendModel } from "~/models";

export interface ${name}Props {
	/** The trend this ${lower(subject)} highlight is built from. */
	trend: TrendModel;
	/** Position in the surrounding list; drawn as a leading badge. */
	rank?: number;
	/** Rendered at the end of the row. */
	action?: ReactNode;
	/** Draws the category as a second badge. */
	showCategory?: boolean;
}

export function ${name}({ trend, rank, action, showCategory = true }: ${name}Props) {
	return (
		<Card.Root size="sm" variant="outline" colorPalette="${palette}">
			<Card.Body>
				<HStack gap="3" align="start">
					{rank === undefined ? null : (
						<Badge size="sm" variant="solid">
							{rank}
						</Badge>
					)}
					<Stack gap="0.5" flex="1" minW="0">
						<Text fontWeight="semibold" truncate>
							{trend.label}
						</Text>
						<Text fontSize="xs" color="fg.muted">
							{trend.postCount.toLocaleString("en-US")} posts
						</Text>
						{showCategory && trend.category ? (
							<Badge size="xs" variant="subtle" alignSelf="start">
								{trend.category}
							</Badge>
						) : null}
					</Stack>
					{action}
				</HStack>
			</Card.Body>
		</Card.Root>
	);
}
`,
	},
	{
		suffix: "AudienceRow",
		render: ({ name, subject }) => `import { Avatar, Badge, HStack, Stack, Text, chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";

const audienceLabel: Record<Visibility, string> = {
	public: "Everyone",
	followers: "Followers",
	circle: "Circle",
	unlisted: "Unlisted",
};

export interface ${name}Props {
	/** The account this ${lower(subject)} row is about. */
	author: AuthorModel;
	/** Who can see this account's activity here. */
	visibility: Visibility;
	/** Rendered at the end of the row. */
	meta?: ReactNode;
	/** Fired with the account's id when the row is activated. */
	onSelect?: (id: string) => void;
}

export function ${name}({ author, visibility, meta, onSelect }: ${name}Props) {
	return (
		<chakra.button
			type="button"
			width="full"
			textAlign="start"
			px="2"
			py="2"
			borderRadius="l2"
			cursor="pointer"
			_hover={{ bg: "bg.emphasized" }}
			onClick={() => onSelect?.(author.id)}
		>
			<HStack gap="3">
				<Avatar.Root size="sm" variant="subtle" colorPalette="gray">
					<Avatar.Fallback name={author.displayName} />
					<Avatar.Image src={author.avatarUrl} alt={author.displayName} />
				</Avatar.Root>
				<Stack gap="0" flex="1" minW="0">
					<Text fontSize="sm" fontWeight="semibold" truncate>
						{author.displayName}
					</Text>
					<Text fontSize="sm" color="fg.muted" truncate>
						@{author.handle}
					</Text>
				</Stack>
				<Badge size="xs" variant="subtle">
					{audienceLabel[visibility]}
				</Badge>
				{meta}
			</HStack>
		</chakra.button>
	);
}
`,
	},
];

const existing = new Set(readdirSync(outDir).filter((f) => f.endsWith(".tsx")));
let written = 0;
let i = 0;
// 7 is coprime with the subject count, so (subject, template) pairs stay unique for far more
// components than any host asks for. Names that collide with a file already on disk — the
// contract components and the near-miss families — are skipped, not overwritten.
while (existing.size < target) {
	if (i > 5000) {
		console.error(`ran out of name pairs at ${existing.size} of ${target}`);
		process.exit(1);
	}
	const template = templates[i % templates.length];
	const subject = subjects[(i * 7) % subjects.length];
	const palette = palettes[i % palettes.length];
	i++;

	const name = `${subject}${template.suffix}`;
	const file = `${kebab(name)}.tsx`;
	if (existing.has(file)) continue;

	writeFileSync(join(outDir, file), template.render({ name, subject, palette }));
	existing.add(file);
	written++;
}

console.log(`${outDir}: wrote ${written}, ${existing.size} components total`);
