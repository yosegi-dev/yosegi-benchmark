export interface VisibilityBadgeProps {
    /** Text inside the badge. */
    label: string;
    /** Drives the colour. */
    status: "active" | "pending" | "paused" | "archived";
    size?: "xs" | "sm" | "md";
    /** Draws the badge outlined instead of tinted. */
    outlined?: boolean;
}
export declare function VisibilityBadge({ label, status, size, outlined }: VisibilityBadgeProps): import("react").JSX.Element;
