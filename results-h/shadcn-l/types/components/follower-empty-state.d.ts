import type { ReactNode } from "react";
export interface FollowerEmptyStateProps {
    title: string;
    /** Explains why there is nothing to show and what to do next. */
    message: string;
    /** Rendered under the message, typically a button. */
    action?: ReactNode;
    variant?: "default" | "subtle" | "card";
}
export declare function FollowerEmptyState({ title, message, action, variant }: FollowerEmptyStateProps): import("react").JSX.Element;
