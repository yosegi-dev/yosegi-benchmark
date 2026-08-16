export interface VerificationBadgeProps {
    /** How far through the verification ladder this account is. */
    level: "none" | "basic" | "trusted" | "official";
    /** Overrides the label derived from the level. */
    label?: string;
    showIcon?: boolean;
}
export declare function VerificationBadge({ level, label, showIcon }: VerificationBadgeProps): import("react").JSX.Element | null;
