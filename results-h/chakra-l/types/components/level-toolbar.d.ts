import type { ReactNode } from "react";
export interface LevelToolbarProps {
    /** The main level controls. */
    primary: ReactNode;
    /** Controls pushed to the far side, after a divider. */
    secondary?: ReactNode;
    /** Where the toolbar sits along its row. */
    align?: "start" | "center" | "end";
    /** Draws a border and a background behind the row. */
    bordered?: boolean;
}
export declare function LevelToolbar({ primary, secondary, align, bordered }: LevelToolbarProps): import("react").JSX.Element;
