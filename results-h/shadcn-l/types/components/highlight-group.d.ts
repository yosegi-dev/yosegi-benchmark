import type { ReactNode } from "react";
export interface HighlightGroupProps {
    /** The items to lay out. */
    children: ReactNode;
    /** Lets the items flow onto a second line. */
    wrap?: boolean;
    gap?: "xs" | "sm" | "md";
    /** Accessible name for the group as a whole. */
    label?: string;
}
export declare function HighlightGroup({ children, wrap, gap, label }: HighlightGroupProps): import("react").JSX.Element;
