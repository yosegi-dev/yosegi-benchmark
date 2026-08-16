export interface ModerationBadgeProps {
    /** How far through the moderation ladder this account is. */
    level: "none" | "basic" | "trusted" | "official";
    /** Overrides the label derived from the level. */
    label?: string;
    showIcon?: boolean;
}
export declare function ModerationBadge({ level, label, showIcon }: ModerationBadgeProps): import("react").JSX.Element | null;
