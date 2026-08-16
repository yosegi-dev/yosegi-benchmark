import type { Density, FeedKind } from "~/models";
export interface FeedTabsProps {
    /** The feed currently shown; the labels are owned by this component. */
    activeFeed: FeedKind;
    onFeedChange: (feed: FeedKind) => void;
    /** Drives the tab height. */
    density?: Density;
}
export declare function FeedTabs({ activeFeed, onFeedChange, density }: FeedTabsProps): import("react").JSX.Element;
