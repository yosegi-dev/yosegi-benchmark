export interface InterestChipProps {
    label: string;
    tone?: "neutral" | "accent" | "muted";
    /** Shows the leading glyph. */
    withIcon?: boolean;
    /** Shows the trailing close button. */
    removable?: boolean;
    onRemove?: () => void;
}
export declare function InterestChip({ label, tone, withIcon, removable, onRemove, }: InterestChipProps): import("react").JSX.Element;
