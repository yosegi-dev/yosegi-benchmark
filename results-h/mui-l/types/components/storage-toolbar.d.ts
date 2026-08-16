import type { ReactNode } from "react";
export interface StorageToolbarProps {
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
export declare function StorageToolbar({ label, leading, trailing, dense, sticky }: StorageToolbarProps): import("react").JSX.Element;
