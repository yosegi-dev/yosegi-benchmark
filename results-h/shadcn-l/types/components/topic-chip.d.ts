export interface TopicChipProps {
    label: string;
    tone?: "neutral" | "accent" | "muted";
    /** Shows the leading glyph. */
    withIcon?: boolean;
    /** Shows the trailing close button. */
    removable?: boolean;
    onRemove?: () => void;
}
export declare function TopicChip({ label, tone, withIcon, removable, onRemove, }: TopicChipProps): import("react").JSX.Element;
