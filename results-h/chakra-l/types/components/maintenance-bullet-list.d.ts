import type { ReactNode } from "react";
export interface MaintenanceBulletListProps {
    /** The maintenance lines, in display order. */
    items: string[];
    /** Marker draws a bullet; plain leaves the line flush. */
    variant?: "marker" | "plain";
    /** Rendered under the list. */
    trailing?: ReactNode;
}
export declare function MaintenanceBulletList({ items, variant, trailing }: MaintenanceBulletListProps): import("react").JSX.Element;
