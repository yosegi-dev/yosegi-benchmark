import type { ReactNode } from "react";
export interface FontBulletListProps {
    /** The font lines, in display order. */
    items: string[];
    /** Marker draws a bullet; plain leaves the line flush. */
    variant?: "marker" | "plain";
    /** Rendered under the list. */
    trailing?: ReactNode;
}
export declare function FontBulletList({ items, variant, trailing }: FontBulletListProps): import("react").JSX.Element;
