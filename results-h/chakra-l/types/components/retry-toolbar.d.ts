import type { ReactNode } from "react";
export interface RetryToolbarProps {
    /** The main retry controls. */
    primary: ReactNode;
    /** Controls pushed to the far side, after a divider. */
    secondary?: ReactNode;
    /** Where the toolbar sits along its row. */
    align?: "start" | "center" | "end";
    /** Draws a border and a background behind the row. */
    bordered?: boolean;
}
export declare function RetryToolbar({ primary, secondary, align, bordered }: RetryToolbarProps): import("react").JSX.Element;
