import type { ReactNode } from "react";
export interface CaptionRatingProps {
    /** How many stars are filled. */
    value: number;
    /** How many stars are drawn in total. */
    count?: number;
    /** Rendered after the stars — the caption sample size, usually. */
    caption?: ReactNode;
    /** Fired with the star the reader picked; omit to render a read-only display. */
    onRatingChange?: (value: number) => void;
}
export declare function CaptionRating({ value, count, caption, onRatingChange }: CaptionRatingProps): import("react").JSX.Element;
