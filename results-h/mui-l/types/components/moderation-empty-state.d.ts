import type { ReactNode } from "react";
export interface ModerationEmptyStateProps {
    /** Headline explaining what is missing. */
    title: string;
    /** Copy under the headline. */
    description?: string;
    /** Glyph drawn above the headline. */
    icon?: ReactNode;
    /** Drawn under the copy, e.g. a button. */
    action?: ReactNode;
    /** Overall scale of the block. */
    size?: "sm" | "md" | "lg";
}
export declare function ModerationEmptyState({ title, description, icon, action, size }: ModerationEmptyStateProps): import("react").JSX.Element;
