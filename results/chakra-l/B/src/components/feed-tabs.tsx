import { Tabs } from "@chakra-ui/react";
import type { Density, FeedKind } from "~/models";

const tabsSize = {
	compact: "sm",
	cozy: "md",
	roomy: "lg",
} as const;

const feeds: { value: FeedKind; label: string }[] = [
	{ value: "for-you", label: "For you" },
	{ value: "following", label: "Following" },
	{ value: "list", label: "Lists" },
];

export interface FeedTabsProps {
	/** The currently selected feed. */
	activeFeed: FeedKind;
	/** Fired with the feed the user moved to. */
	onFeedChange: (feed: FeedKind) => void;
	/** Controls the tab height and label size. */
	density?: Density;
}

export function FeedTabs({ activeFeed, onFeedChange, density = "cozy" }: FeedTabsProps) {
	return (
		<Tabs.Root
			value={activeFeed}
			size={tabsSize[density]}
			variant="line"
			fitted
			onValueChange={(details) => onFeedChange(details.value as FeedKind)}
		>
			<Tabs.List>
				{feeds.map((feed) => (
					<Tabs.Trigger key={feed.value} value={feed.value}>
						{feed.label}
					</Tabs.Trigger>
				))}
			</Tabs.List>
		</Tabs.Root>
	);
}
