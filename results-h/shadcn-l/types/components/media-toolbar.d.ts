import type { ReactNode } from "react";
export interface MediaToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function MediaToolbar({ children, align, bordered }: MediaToolbarProps): import("react").JSX.Element;
