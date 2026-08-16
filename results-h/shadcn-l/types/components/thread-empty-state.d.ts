import type { ReactNode } from "react";
export interface ThreadEmptyStateProps {
    title: string;
    /** Explains why there is nothing to show and what to do next. */
    message: string;
    /** Rendered under the message, typically a button. */
    action?: ReactNode;
    variant?: "default" | "subtle" | "card";
}
export declare function ThreadEmptyState({ title, message, action, variant }: ThreadEmptyStateProps): import("react").JSX.Element;
