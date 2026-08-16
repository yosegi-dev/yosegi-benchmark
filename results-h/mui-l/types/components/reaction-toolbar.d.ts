import type { ReactNode } from "react";
export interface ReactionToolbarProps {
    /** Name of the surface the toolbar belongs to. */
    label: string;
    /** Controls at the leading edge. */
    leading?: ReactNode;
    /** Controls at the trailing edge. */
    trailing?: ReactNode;
    /** Tightens the height. */
    dense?: boolean;
    /** Draws a divider under the toolbar. */
    divided?: boolean;
}
export declare function ReactionToolbar({ label, leading, trailing, dense, divided }: ReactionToolbarProps): import("react").JSX.Element;
