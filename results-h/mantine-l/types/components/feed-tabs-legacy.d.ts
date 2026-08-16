export interface FeedTabsLegacyProps {
    /** Tabs to render, in order; the caller owns the labels. */
    tabs: {
        key: string;
        title: string;
    }[];
    /** Key of the selected tab. */
    selected: string;
    /** Fired with the key of the tab that was selected. */
    onSelect: (key: string) => void;
    variant?: "default" | "outline" | "pills";
}
export declare function FeedTabsLegacy({ tabs, selected, onSelect, variant }: FeedTabsLegacyProps): import("react").JSX.Element;
