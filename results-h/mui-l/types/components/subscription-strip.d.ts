import type { ReactNode } from "react";
export interface SubscriptionStripProps {
    /** Chip labels, in display order. */
    labels: string[];
    /** Text drawn before the chips. */
    caption?: string;
    /** Chips shown before the overflow counter. */
    max?: number;
    /** Drawn after the chips. */
    trailing?: ReactNode;
    /** Colour applied to every chip. */
    color?: "default" | "primary" | "secondary";
}
export declare function SubscriptionStrip({ labels, caption, max, trailing, color }: SubscriptionStripProps): import("react").JSX.Element;
