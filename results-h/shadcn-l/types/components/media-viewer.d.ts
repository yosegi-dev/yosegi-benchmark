export interface MediaViewerSource {
    url: string;
    alt: string;
}
export interface MediaViewerProps {
    sources: MediaViewerSource[];
    /** Index of the source currently on screen. */
    index: number;
    onIndexChange: (index: number) => void;
    /** Draws the filmstrip under the main frame. */
    showThumbnails?: boolean;
}
export declare function MediaViewer({ sources, index, onIndexChange, showThumbnails, }: MediaViewerProps): import("react").JSX.Element | null;
