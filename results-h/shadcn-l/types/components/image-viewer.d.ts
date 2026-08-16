export interface ImageViewerSource {
    url: string;
    alt: string;
}
export interface ImageViewerProps {
    sources: ImageViewerSource[];
    /** Index of the source currently on screen. */
    index: number;
    onIndexChange: (index: number) => void;
    /** Draws the filmstrip under the main frame. */
    showThumbnails?: boolean;
}
export declare function ImageViewer({ sources, index, onIndexChange, showThumbnails, }: ImageViewerProps): import("react").JSX.Element | null;
