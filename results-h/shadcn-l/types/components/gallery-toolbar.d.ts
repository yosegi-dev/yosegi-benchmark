import type { ReactNode } from "react";
export interface GalleryToolbarProps {
    /** The controls to lay out. */
    children: ReactNode;
    align?: "start" | "between" | "end";
    /** Draws a rule under the toolbar. */
    bordered?: boolean;
}
export declare function GalleryToolbar({ children, align, bordered }: GalleryToolbarProps): import("react").JSX.Element;
