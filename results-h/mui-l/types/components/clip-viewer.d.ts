import type { ReactNode } from "react";
export interface ClipViewerProps {
    /** Image URLs laid out in a grid. */
    urls: string[];
    /** Alt text applied to every image; the grid is decorative otherwise. */
    altPrefix: string;
    /** Images per row. */
    columns?: 1 | 2 | 3;
    /** Drawn over the grid, e.g. a close button. */
    overlay?: ReactNode;
    /** Fired with the index that was clicked. */
    onFrameSelect?: (index: number) => void;
}
export declare function ClipViewer({ urls, altPrefix, columns, overlay, onFrameSelect }: ClipViewerProps): import("react").JSX.Element;
