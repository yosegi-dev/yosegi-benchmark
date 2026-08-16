import type { ReactNode } from "react";
export interface DraftEmptyStateProps {
    title: string;
    /** Explains why there is nothing to show and what to do next. */
    message: string;
    /** Rendered under the message, typically a button. */
    action?: ReactNode;
    variant?: "default" | "subtle" | "card";
}
export declare function DraftEmptyState({ title, message, action, variant }: DraftEmptyStateProps): import("react").JSX.Element;
