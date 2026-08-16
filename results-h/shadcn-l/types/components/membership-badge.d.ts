export interface MembershipBadgeProps {
    /** How far through the membership ladder this account is. */
    level: "none" | "basic" | "trusted" | "official";
    /** Overrides the label derived from the level. */
    label?: string;
    showIcon?: boolean;
}
export declare function MembershipBadge({ level, label, showIcon }: MembershipBadgeProps): import("react").JSX.Element | null;
