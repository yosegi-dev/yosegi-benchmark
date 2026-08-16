export interface MediaChipProps {
    label: string;
    tone?: "neutral" | "accent" | "muted";
    /** Shows the leading glyph. */
    withIcon?: boolean;
    /** Shows the trailing close button. */
    removable?: boolean;
    onRemove?: () => void;
}
export declare function MediaChip({ label, tone, withIcon, removable, onRemove, }: MediaChipProps): import("react").JSX.Element;
