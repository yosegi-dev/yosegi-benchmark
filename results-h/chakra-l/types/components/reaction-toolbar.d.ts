import type { ReactNode } from "react";
export interface ReactionToolbarProps {
    /** The main reaction controls. */
    primary: ReactNode;
    /** Controls pushed to the far side, after a divider. */
    secondary?: ReactNode;
    /** Where the toolbar sits along its row. */
    align?: "start" | "center" | "end";
    /** Draws a border and a background behind the row. */
    bordered?: boolean;
}
export declare function ReactionToolbar({ primary, secondary, align, bordered }: ReactionToolbarProps): import("react").JSX.Element;
