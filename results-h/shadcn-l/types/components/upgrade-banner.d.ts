import type { ReactNode } from "react";
export interface UpgradeBannerProps {
    tone: "info" | "success" | "warning" | "critical";
    title: string;
    /** Detail line under the title. */
    message?: string;
    /** Rendered at the right, typically a link or a button. */
    action?: ReactNode;
    /** When given, a close button appears. */
    onDismiss?: () => void;
}
export declare function UpgradeBanner({ tone, title, message, action, onDismiss }: UpgradeBannerProps): import("react").JSX.Element;
