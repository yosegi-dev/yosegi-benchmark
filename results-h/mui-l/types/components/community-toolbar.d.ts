import type { ReactNode } from "react";
export interface CommunityToolbarProps {
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
export declare function CommunityToolbar({ label, leading, trailing, dense, sticky }: CommunityToolbarProps): import("react").JSX.Element;
