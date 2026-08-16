import type { ReactNode } from "react";
export interface ImpressionViewerProps {
    /** The impression asset to display. */
    source: {
        url: string;
        alt: string;
    };
    /** Width divided by height. */
    ratio?: number;
    /** Rendered over the bottom of the frame. */
    overlay?: ReactNode;
    /** When set, a close button is drawn in the corner. */
    onClose?: () => void;
}
export declare function ImpressionViewer({ source, ratio, overlay, onClose }: ImpressionViewerProps): import("react").JSX.Element;
