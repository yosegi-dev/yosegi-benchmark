import type { ReactNode } from "react";
export interface PollEmptyStateProps {
    title: string;
    /** Explains why there is nothing to show and what to do next. */
    message: string;
    /** Rendered under the message, typically a button. */
    action?: ReactNode;
    variant?: "default" | "subtle" | "card";
}
export declare function PollEmptyState({ title, message, action, variant }: PollEmptyStateProps): import("react").JSX.Element;
