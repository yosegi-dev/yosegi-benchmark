import type { ReactNode } from "react";
export interface OnboardingRatingProps {
    /** How many stars are filled. */
    value: number;
    /** How many stars are drawn in total. */
    count?: number;
    /** Rendered after the stars — the onboarding sample size, usually. */
    caption?: ReactNode;
    /** Fired with the star the reader picked; omit to render a read-only display. */
    onRatingChange?: (value: number) => void;
}
export declare function OnboardingRating({ value, count, caption, onRatingChange }: OnboardingRatingProps): import("react").JSX.Element;
