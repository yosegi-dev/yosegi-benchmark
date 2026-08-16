export interface InviteStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface InviteStripProps {
    /** The chips to draw. */
    items: InviteStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function InviteStrip({ items, selectedIds, onToggle, size, wrap }: InviteStripProps): import("react").JSX.Element;
