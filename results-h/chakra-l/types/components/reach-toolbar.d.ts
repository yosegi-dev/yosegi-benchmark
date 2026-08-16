import type { ReactNode } from "react";
export interface ReachToolbarProps {
    /** The main reach controls. */
    primary: ReactNode;
    /** Controls pushed to the far side, after a divider. */
    secondary?: ReactNode;
    /** Where the toolbar sits along its row. */
    align?: "start" | "center" | "end";
    /** Draws a border and a background behind the row. */
    bordered?: boolean;
}
export declare function ReachToolbar({ primary, secondary, align, bordered }: ReachToolbarProps): import("react").JSX.Element;
