export interface VideoViewerSource {
    url: string;
    alt: string;
}
export interface VideoViewerProps {
    sources: VideoViewerSource[];
    /** Index of the source currently on screen. */
    index: number;
    onIndexChange: (index: number) => void;
    /** Draws the filmstrip under the main frame. */
    showThumbnails?: boolean;
}
export declare function VideoViewer({ sources, index, onIndexChange, showThumbnails, }: VideoViewerProps): import("react").JSX.Element | null;
