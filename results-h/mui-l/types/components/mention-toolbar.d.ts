import type { ReactNode } from "react";
export interface MentionToolbarProps {
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
export declare function MentionToolbar({ label, leading, trailing, dense, divided }: MentionToolbarProps): import("react").JSX.Element;
