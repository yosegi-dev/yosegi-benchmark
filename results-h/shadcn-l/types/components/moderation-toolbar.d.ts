import type { ReactNode } from "react";
export interface ModerationToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function ModerationToolbar({ children, align, bordered }: ModerationToolbarProps): import("react").JSX.Element;
