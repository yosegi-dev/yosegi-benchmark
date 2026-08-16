import type { ReactNode } from "react";
export interface NotificationEmptyStateProps {
    title: string;
    /** Explains why there is nothing to show and what to do next. */
    message: string;
    /** Rendered under the message, typically a button. */
    action?: ReactNode;
    variant?: "default" | "subtle" | "card";
}
export declare function NotificationEmptyState({ title, message, action, variant }: NotificationEmptyStateProps): import("react").JSX.Element;
