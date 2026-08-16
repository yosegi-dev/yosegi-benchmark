export interface VisibilityBadgeProps {
    /** How far through the visibility ladder this account is. */
    level: "none" | "basic" | "trusted" | "official";
    /** Overrides the label derived from the level. */
    label?: string;
    showIcon?: boolean;
}
export declare function VisibilityBadge({ level, label, showIcon }: VisibilityBadgeProps): import("react").JSX.Element | null;
