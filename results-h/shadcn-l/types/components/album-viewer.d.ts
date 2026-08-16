export interface AlbumViewerSource {
    url: string;
    alt: string;
}
export interface AlbumViewerProps {
    sources: AlbumViewerSource[];
    /** Index of the source currently on screen. */
    index: number;
    onIndexChange: (index: number) => void;
    /** Draws the filmstrip under the main frame. */
    showThumbnails?: boolean;
}
export declare function AlbumViewer({ sources, index, onIndexChange, showThumbnails, }: AlbumViewerProps): import("react").JSX.Element | null;
