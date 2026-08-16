import type { ReactNode } from "react";
export interface SettingToolbarProps {
    /** Name of the surface the toolbar belongs to. */
    label: string;
    /** Controls at the leading edge. */
    leading?: ReactNode;
    /** Controls at the trailing edge. */
    trailing?: ReactNode;
    /** Tightens the height. */
    dense?: boolean;
    /** Pins the toolbar to the top of its scroll container. */
    sticky?: boolean;
}
export declare function SettingToolbar({ label, leading, trailing, dense, sticky }: SettingToolbarProps): import("react").JSX.Element;
