import { Tabs } from "@mantine/core";
import type { Density, FeedKind } from "~/models";

const FEEDS: { value: FeedKind; label: string }[] = [
	{ value: "for-you", label: "For you" },
	{ value: "following", label: "Following" },
	{ value: "list", label: "Lists" },
];

function isFeedKind(value: string | null): value is FeedKind {
	return FEEDS.some((feed) => feed.value === value);
}

export interface FeedTabsProps {
	/** The currently selected feed. */
	activeFeed: FeedKind;
	/** Fired with the feed the user moved to. */
	onFeedChange: (feed: FeedKind) => void;
	/** Drives the tab padding. */
	density?: Density;
}

export function FeedTabs({ activeFeed, onFeedChange, density = "cozy" }: FeedTabsProps) {
	return (
		<Tabs
			value={activeFeed}
			onChange={(value) => {
				// Tabs can report null when a tab is deactivated; the feed is never absent.
				if (isFeedKind(value)) {
					onFeedChange(value);
				}
			}}
		>
			<Tabs.List grow>
				{FEEDS.map((feed) => (
					<Tabs.Tab key={feed.value} value={feed.value} py={density === "compact" ? "xs" : "sm"}>
						{feed.label}
					</Tabs.Tab>
				))}
			</Tabs.List>
		</Tabs>
	);
}
