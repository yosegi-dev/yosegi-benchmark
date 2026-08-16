import type { ReactNode } from "react";
export interface FollowerBulletListProps {
    /** The follower lines, in display order. */
    items: string[];
    /** Marker draws a bullet; plain leaves the line flush. */
    variant?: "marker" | "plain";
    /** Rendered under the list. */
    trailing?: ReactNode;
}
export declare function FollowerBulletList({ items, variant, trailing }: FollowerBulletListProps): import("react").JSX.Element;
