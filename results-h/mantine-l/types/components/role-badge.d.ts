export interface RoleBadgeProps {
    /** Text inside the badge. */
    label: string;
    /** Drives the colour. */
    status: "active" | "pending" | "paused" | "archived";
    size?: "xs" | "sm" | "md";
    /** Draws the badge outlined instead of tinted. */
    outlined?: boolean;
}
export declare function RoleBadge({ label, status, size, outlined }: RoleBadgeProps): import("react").JSX.Element;
