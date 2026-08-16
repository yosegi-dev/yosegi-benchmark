import type { ReactNode } from "react";
export interface ThreadToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function ThreadToolbar({ children, align, bordered }: ThreadToolbarProps): import("react").JSX.Element;
