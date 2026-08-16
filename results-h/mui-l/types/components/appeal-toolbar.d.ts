import type { ReactNode } from "react";
export interface AppealToolbarProps {
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
export declare function AppealToolbar({ label, leading, trailing, dense, divided }: AppealToolbarProps): import("react").JSX.Element;
