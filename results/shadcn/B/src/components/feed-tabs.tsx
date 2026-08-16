import { densityControl } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density, FeedKind } from "~/models";
import { Tabs, TabsList, TabsTrigger } from "~/ui/tabs";

const FEED_LABELS: Record<FeedKind, string> = {
	"for-you": "For you",
	following: "Following",
	list: "Lists",
};

const FEED_ORDER: FeedKind[] = ["for-you", "following", "list"];

export interface FeedTabsProps {
	/** The currently selected feed. */
	activeFeed: FeedKind;
	/** Called with the feed the user selected. */
	onFeedChange: (feed: FeedKind) => void;
	/** Spacing scale, which here selects the tab strip height. */
	density?: Density;
}

export function FeedTabs({ activeFeed, onFeedChange, density = "cozy" }: FeedTabsProps) {
	return (
		<Tabs
			value={activeFeed}
			onValueChange={(value) => onFeedChange(value as FeedKind)}
			className="w-full"
		>
			<TabsList className={cn("w-full", densityControl[density])}>
				{FEED_ORDER.map((feed) => (
					<TabsTrigger key={feed} value={feed} className="flex-1">
						{FEED_LABELS[feed]}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	);
}
