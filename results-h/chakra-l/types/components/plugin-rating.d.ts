import type { ReactNode } from "react";
export interface PluginRatingProps {
    /** How many stars are filled. */
    value: number;
    /** How many stars are drawn in total. */
    count?: number;
    /** Rendered after the stars — the plugin sample size, usually. */
    caption?: ReactNode;
    /** Fired with the star the reader picked; omit to render a read-only display. */
    onRatingChange?: (value: number) => void;
}
export declare function PluginRating({ value, count, caption, onRatingChange }: PluginRatingProps): import("react").JSX.Element;
