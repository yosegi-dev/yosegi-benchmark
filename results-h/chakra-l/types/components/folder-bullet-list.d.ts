import type { ReactNode } from "react";
export interface FolderBulletListProps {
    /** The folder lines, in display order. */
    items: string[];
    /** Marker draws a bullet; plain leaves the line flush. */
    variant?: "marker" | "plain";
    /** Rendered under the list. */
    trailing?: ReactNode;
}
export declare function FolderBulletList({ items, variant, trailing }: FolderBulletListProps): import("react").JSX.Element;
