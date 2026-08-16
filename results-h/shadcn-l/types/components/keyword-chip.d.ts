export interface KeywordChipProps {
    label: string;
    tone?: "neutral" | "accent" | "muted";
    /** Shows the leading glyph. */
    withIcon?: boolean;
    /** Shows the trailing close button. */
    removable?: boolean;
    onRemove?: () => void;
}
export declare function KeywordChip({ label, tone, withIcon, removable, onRemove, }: KeywordChipProps): import("react").JSX.Element;
