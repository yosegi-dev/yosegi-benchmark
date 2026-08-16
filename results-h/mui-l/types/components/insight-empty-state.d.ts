export interface InsightEmptyStateProps {
    /** Headline explaining what is missing. */
    title: string;
    /** Copy under the headline. */
    description: string;
    /** Label of the recovery button; the button is hidden without it. */
    actionLabel?: string;
    /** Why the surface is empty, which changes the illustration. */
    reason?: "empty" | "filtered" | "error" | "offline";
    onAction?: () => void;
}
export declare function InsightEmptyState({ title, description, actionLabel, reason, onAction }: InsightEmptyStateProps): import("react").JSX.Element;
