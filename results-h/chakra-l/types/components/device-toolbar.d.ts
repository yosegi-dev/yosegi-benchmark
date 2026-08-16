import type { ReactNode } from "react";
export interface DeviceToolbarProps {
    /** The main device controls. */
    primary: ReactNode;
    /** Controls pushed to the far side, after a divider. */
    secondary?: ReactNode;
    /** Where the toolbar sits along its row. */
    align?: "start" | "center" | "end";
    /** Draws a border and a background behind the row. */
    bordered?: boolean;
}
export declare function DeviceToolbar({ primary, secondary, align, bordered }: DeviceToolbarProps): import("react").JSX.Element;
