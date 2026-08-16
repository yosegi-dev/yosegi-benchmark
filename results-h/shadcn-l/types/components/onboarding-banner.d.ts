import type { ReactNode } from "react";
export interface OnboardingBannerProps {
    tone: "info" | "success" | "warning" | "critical";
    title: string;
    /** Detail line under the title. */
    message?: string;
    /** Rendered at the right, typically a link or a button. */
    action?: ReactNode;
    /** When given, a close button appears. */
    onDismiss?: () => void;
}
export declare function OnboardingBanner({ tone, title, message, action, onDismiss }: OnboardingBannerProps): import("react").JSX.Element;
