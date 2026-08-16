import type { ReactNode } from "react";
export interface MessageEmptyStateProps {
    /** Headline explaining what is missing. */
    title: string;
    /** Sentence under the headline. */
    description?: string;
    /** Slot for the recovery action. */
    action?: ReactNode;
    /** Colour of the icon disc. */
    tone?: "neutral" | "info" | "warning";
}
export declare function MessageEmptyState({ title, description, action, tone }: MessageEmptyStateProps): import("react").JSX.Element;
