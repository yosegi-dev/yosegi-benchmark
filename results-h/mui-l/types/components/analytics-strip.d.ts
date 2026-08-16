export interface AnalyticsStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface AnalyticsStripProps {
    /** The chips to draw. */
    items: AnalyticsStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function AnalyticsStrip({ items, selectedIds, onToggle, size, wrap }: AnalyticsStripProps): import("react").JSX.Element;
