export interface LanguageStripItem {
    id: string;
    label: string;
    /** Count drawn after the label. */
    count?: number;
}
export interface LanguageStripProps {
    /** The chips to draw. */
    items: LanguageStripItem[];
    /** Ids currently switched on. */
    selectedIds?: string[];
    /** Fired with the id that was clicked. */
    onToggle?: (id: string) => void;
    /** MUI chip scale. */
    size?: "small" | "medium";
    /** Lets the strip wrap instead of scrolling sideways. */
    wrap?: boolean;
}
export declare function LanguageStrip({ items, selectedIds, onToggle, size, wrap }: LanguageStripProps): import("react").JSX.Element;
