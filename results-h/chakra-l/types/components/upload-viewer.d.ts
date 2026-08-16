import type { ReactNode } from "react";
export interface UploadViewerProps {
    /** The upload asset to display. */
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
export declare function UploadViewer({ source, ratio, overlay, onClose }: UploadViewerProps): import("react").JSX.Element;
