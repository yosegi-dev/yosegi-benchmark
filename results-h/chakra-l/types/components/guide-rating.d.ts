import type { ReactNode } from "react";
export interface GuideRatingProps {
    /** How many stars are filled. */
    value: number;
    /** How many stars are drawn in total. */
    count?: number;
    /** Rendered after the stars — the guide sample size, usually. */
    caption?: ReactNode;
    /** Fired with the star the reader picked; omit to render a read-only display. */
    onRatingChange?: (value: number) => void;
}
export declare function GuideRating({ value, count, caption, onRatingChange }: GuideRatingProps): import("react").JSX.Element;
