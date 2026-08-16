import type { ReactNode } from "react";
export interface MembershipToolbarProps {
    /** The main membership controls. */
    primary: ReactNode;
    /** Controls pushed to the far side, after a divider. */
    secondary?: ReactNode;
    /** Where the toolbar sits along its row. */
    align?: "start" | "center" | "end";
    /** Draws a border and a background behind the row. */
    bordered?: boolean;
}
export declare function MembershipToolbar({ primary, secondary, align, bordered }: MembershipToolbarProps): import("react").JSX.Element;
