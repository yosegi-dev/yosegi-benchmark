export interface FeedTabsLegacyTab {
    id: string;
    label: string;
    /** Drawn after the label when set. */
    badge?: number;
}
export interface FeedTabsLegacyProps {
    /** Tabs to draw; the caller owns the labels. */
    tabs: FeedTabsLegacyTab[];
    /** Id of the tab that is open. */
    selectedId: string;
    /** Fired with the id of the tab that was picked. */
    onSelect: (id: string) => void;
    /** Lets the strip scroll instead of dividing the width evenly. */
    scrollable?: boolean;
}
export declare function FeedTabsLegacy({ tabs, selectedId, onSelect, scrollable }: FeedTabsLegacyProps): import("react").JSX.Element;
