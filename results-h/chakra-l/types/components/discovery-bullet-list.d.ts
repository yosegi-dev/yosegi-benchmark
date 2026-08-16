import type { ReactNode } from "react";
export interface DiscoveryBulletListProps {
    /** The discovery lines, in display order. */
    items: string[];
    /** Marker draws a bullet; plain leaves the line flush. */
    variant?: "marker" | "plain";
    /** Rendered under the list. */
    trailing?: ReactNode;
}
export declare function DiscoveryBulletList({ items, variant, trailing }: DiscoveryBulletListProps): import("react").JSX.Element;
