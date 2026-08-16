export interface FeedTabsLegacyTab {
    id: string;
    label: string;
}
export interface FeedTabsLegacyProps {
    /** The id of the selected tab. */
    value: string;
    /** Tabs and their labels, supplied by the caller. */
    tabs: FeedTabsLegacyTab[];
    onChange: (value: string) => void;
}
export declare function FeedTabsLegacy({ value, tabs, onChange }: FeedTabsLegacyProps): import("react").JSX.Element;
