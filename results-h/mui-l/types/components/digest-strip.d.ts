export interface DigestStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface DigestStripProps {
    /** The chips to draw. */
    items: DigestStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function DigestStrip({ items, selectedIds, onToggle, size, wrap }: DigestStripProps): import("react").JSX.Element;
