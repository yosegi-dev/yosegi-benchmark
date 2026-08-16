import type { ReactNode } from "react";
export interface MediaEmptyStateProps {
    /** Headline explaining what is missing. */
    title: string;
    /** Sentence under the headline. */
    description?: string;
    /** Slot for the recovery action. */
    action?: ReactNode;
    /** Colour of the icon disc. */
    tone?: "neutral" | "info" | "warning";
}
export declare function MediaEmptyState({ title, description, action, tone }: MediaEmptyStateProps): import("react").JSX.Element;
