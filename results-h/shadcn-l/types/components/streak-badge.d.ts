export interface StreakBadgeProps {
    /** How far through the streak ladder this account is. */
    level: "none" | "basic" | "trusted" | "official";
    /** Overrides the label derived from the level. */
    label?: string;
    showIcon?: boolean;
}
export declare function StreakBadge({ level, label, showIcon }: StreakBadgeProps): import("react").JSX.Element | null;
