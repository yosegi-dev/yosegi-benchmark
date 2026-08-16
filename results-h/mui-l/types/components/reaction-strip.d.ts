export interface ReactionStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface ReactionStripProps {
    /** The chips to draw. */
    items: ReactionStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function ReactionStrip({ items, selectedIds, onToggle, size, wrap }: ReactionStripProps): import("react").JSX.Element;
