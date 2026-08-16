import type { ReactNode } from "react";
export interface OutageBannerProps {
    tone: "info" | "success" | "warning" | "critical";
    title: string;
    /** Detail line under the title. */
    message?: string;
    /** Rendered at the right, typically a link or a button. */
    action?: ReactNode;
    /** When given, a close button appears. */
    onDismiss?: () => void;
}
export declare function OutageBanner({ tone, title, message, action, onDismiss }: OutageBannerProps): import("react").JSX.Element;
