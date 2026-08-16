export interface PriorityBadgeProps {
    /** Text inside the badge. */
    label: string;
    /** Drives the colour. */
    status: "active" | "pending" | "paused" | "archived";
    size?: "xs" | "sm" | "md";
    /** Draws the badge outlined instead of tinted. */
    outlined?: boolean;
}
export declare function PriorityBadge({ label, status, size, outlined }: PriorityBadgeProps): import("react").JSX.Element;
