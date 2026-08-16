import type { ReactNode } from "react";
export interface DiscoveryStripProps {
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
export declare function DiscoveryStrip({ labels, caption, max, trailing, color }: DiscoveryStripProps): import("react").JSX.Element;
