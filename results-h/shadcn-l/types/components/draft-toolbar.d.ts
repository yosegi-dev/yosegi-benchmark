import type { ReactNode } from "react";
export interface DraftToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function DraftToolbar({ children, align, bordered }: DraftToolbarProps): import("react").JSX.Element;
