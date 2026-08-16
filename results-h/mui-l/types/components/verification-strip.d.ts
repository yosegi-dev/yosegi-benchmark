export interface VerificationStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface VerificationStripProps {
    /** The chips to draw. */
    items: VerificationStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function VerificationStrip({ items, selectedIds, onToggle, size, wrap }: VerificationStripProps): import("react").JSX.Element;
