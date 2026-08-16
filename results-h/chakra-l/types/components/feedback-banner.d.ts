import type { ReactNode } from "react";
export interface FeedbackBannerProps {
    /** Headline of the feedback notice. */
    title: string;
    /** Supporting sentence under the headline. */
    description?: string;
    /** Picks the icon and the colour of the banner. */
    status?: "info" | "warning" | "success" | "error";
    /** Rendered at the end of the banner — a link, a button, anything trailing. */
    action?: ReactNode;
    /** When set, a dismiss button is shown. */
    onDismiss?: () => void;
}
export declare function FeedbackBanner({ title, description, status, action, onDismiss }: FeedbackBannerProps): import("react").JSX.Element;
