import type { ReactNode } from "react";
export interface SelectionToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function SelectionToolbar({ children, align, bordered }: SelectionToolbarProps): import("react").JSX.Element;
