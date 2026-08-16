export interface AudienceChipProps {
    label: string;
    tone?: "neutral" | "accent" | "muted";
    /** Shows the leading glyph. */
    withIcon?: boolean;
    /** Shows the trailing close button. */
    removable?: boolean;
    onRemove?: () => void;
}
export declare function AudienceChip({ label, tone, withIcon, removable, onRemove, }: AudienceChipProps): import("react").JSX.Element;
