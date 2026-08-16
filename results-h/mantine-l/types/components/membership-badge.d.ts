export interface MembershipBadgeProps {
    /** Text inside the badge. */
    label: string;
    /** Drives the colour. */
    status: "active" | "pending" | "paused" | "archived";
    size?: "xs" | "sm" | "md";
    /** Draws the badge outlined instead of tinted. */
    outlined?: boolean;
}
export declare function MembershipBadge({ label, status, size, outlined }: MembershipBadgeProps): import("react").JSX.Element;
