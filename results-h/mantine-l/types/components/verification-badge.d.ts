export interface VerificationBadgeProps {
    /** Text inside the badge. */
    label: string;
    /** Drives the colour. */
    status: "active" | "pending" | "paused" | "archived";
    size?: "xs" | "sm" | "md";
    /** Draws the badge outlined instead of tinted. */
    outlined?: boolean;
}
export declare function VerificationBadge({ label, status, size, outlined }: VerificationBadgeProps): import("react").JSX.Element;
