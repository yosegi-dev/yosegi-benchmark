import type { ReactNode } from "react";
export interface ComposerToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function ComposerToolbar({ children, align, bordered }: ComposerToolbarProps): import("react").JSX.Element;
