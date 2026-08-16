import type { ReactNode } from "react";
export interface SpaceEmptyStateProps {
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
export declare function SpaceEmptyState({ title, description, icon, action, size }: SpaceEmptyStateProps): import("react").JSX.Element;
