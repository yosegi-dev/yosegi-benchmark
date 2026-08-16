export interface LocationChipProps {
    label: string;
    tone?: "neutral" | "accent" | "muted";
    /** Shows the leading glyph. */
    withIcon?: boolean;
    /** Shows the trailing close button. */
    removable?: boolean;
    onRemove?: () => void;
}
export declare function LocationChip({ label, tone, withIcon, removable, onRemove, }: LocationChipProps): import("react").JSX.Element;
