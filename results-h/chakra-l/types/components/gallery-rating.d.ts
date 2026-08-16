import type { ReactNode } from "react";
export interface GalleryRatingProps {
    /** How many stars are filled. */
    value: number;
    /** How many stars are drawn in total. */
    count?: number;
    /** Rendered after the stars — the gallery sample size, usually. */
    caption?: ReactNode;
    /** Fired with the star the reader picked; omit to render a read-only display. */
    onRatingChange?: (value: number) => void;
}
export declare function GalleryRating({ value, count, caption, onRatingChange }: GalleryRatingProps): import("react").JSX.Element;
