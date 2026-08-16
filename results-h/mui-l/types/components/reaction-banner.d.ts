import type { ReactNode } from "react";
export interface ReactionBannerProps {
    /** Body copy. */
    message: string;
    /** Bold line above the message. */
    title?: string;
    /** Severity the banner is drawn at. */
    severity?: "info" | "success" | "warning" | "error";
    /** Drawn at the trailing edge, e.g. a button. */
    action?: ReactNode;
    /** Shows a close button when set. */
    onDismiss?: () => void;
}
export declare function ReactionBanner({ message, title, severity, action, onDismiss }: ReactionBannerProps): import("react").JSX.Element;
