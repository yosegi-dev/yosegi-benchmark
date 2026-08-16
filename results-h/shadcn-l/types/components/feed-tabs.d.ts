import type { Density, FeedKind } from "~/models";
export interface FeedTabsProps {
    /** The currently selected feed. */
    activeFeed: FeedKind;
    /** Called with the feed the user selected. */
    onFeedChange: (feed: FeedKind) => void;
    /** Spacing scale, which here selects the tab strip height. */
    density?: Density;
}
export declare function FeedTabs({ activeFeed, onFeedChange, density }: FeedTabsProps): import("react").JSX.Element;
