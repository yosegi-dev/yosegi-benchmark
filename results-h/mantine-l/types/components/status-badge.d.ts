export interface StatusBadgeProps {
    /** Text inside the badge. */
    label: string;
    /** Drives the colour. */
    status: "active" | "pending" | "paused" | "archived";
    size?: "xs" | "sm" | "md";
    /** Draws the badge outlined instead of tinted. */
    outlined?: boolean;
}
export declare function StatusBadge({ label, status, size, outlined }: StatusBadgeProps): import("react").JSX.Element;
