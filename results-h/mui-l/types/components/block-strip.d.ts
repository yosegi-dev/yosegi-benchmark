export interface BlockStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface BlockStripProps {
    /** The chips to draw. */
    items: BlockStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function BlockStrip({ items, selectedIds, onToggle, size, wrap }: BlockStripProps): import("react").JSX.Element;
