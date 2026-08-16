export interface FeedTabsLegacyProps {
    /** The tabs to render, in order; the caller owns the labels. */
    tabs: {
        id: string;
        label: string;
    }[];
    /** Position of the active tab in `tabs`. */
    selectedIndex: number;
    /** Fired with the position of the tab the user moved to. */
    onChange: (index: number) => void;
}
export declare function FeedTabsLegacy({ tabs, selectedIndex, onChange }: FeedTabsLegacyProps): import("react").JSX.Element;
