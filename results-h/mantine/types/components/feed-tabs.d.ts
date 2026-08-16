import type { Density, FeedKind } from "~/models";
export interface FeedTabsProps {
    /** The currently selected feed. */
    activeFeed: FeedKind;
    /** Fired with the feed the user moved to. */
    onFeedChange: (feed: FeedKind) => void;
    /** Drives the tab padding. */
    density?: Density;
}
export declare function FeedTabs({ activeFeed, onFeedChange, density }: FeedTabsProps): import("react").JSX.Element;
