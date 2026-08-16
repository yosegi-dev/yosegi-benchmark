import type { ReactNode } from "react";
export interface DraftToolbarProps {
    /** Slot aligned to the start of the bar. */
    left?: ReactNode;
    /** Slot aligned to the end of the bar. */
    right?: ReactNode;
    /** Pins the bar to the top of its scroll container. */
    sticky?: boolean;
    /** Draws the bottom rule. */
    bordered?: boolean;
}
export declare function DraftToolbar({ left, right, sticky, bordered }: DraftToolbarProps): import("react").JSX.Element;
