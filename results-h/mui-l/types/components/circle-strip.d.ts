import type { ReactNode } from "react";
export interface CircleStripProps {
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
export declare function CircleStrip({ labels, caption, max, trailing, color }: CircleStripProps): import("react").JSX.Element;
