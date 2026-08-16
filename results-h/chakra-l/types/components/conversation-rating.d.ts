import type { ReactNode } from "react";
export interface ConversationRatingProps {
    /** How many stars are filled. */
    value: number;
    /** How many stars are drawn in total. */
    count?: number;
    /** Rendered after the stars — the conversation sample size, usually. */
    caption?: ReactNode;
    /** Fired with the star the reader picked; omit to render a read-only display. */
    onRatingChange?: (value: number) => void;
}
export declare function ConversationRating({ value, count, caption, onRatingChange }: ConversationRatingProps): import("react").JSX.Element;
