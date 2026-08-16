export interface AudioViewerSource {
    url: string;
    alt: string;
}
export interface AudioViewerProps {
    sources: AudioViewerSource[];
    /** Index of the source currently on screen. */
    index: number;
    onIndexChange: (index: number) => void;
    /** Draws the filmstrip under the main frame. */
    showThumbnails?: boolean;
}
export declare function AudioViewer({ sources, index, onIndexChange, showThumbnails, }: AudioViewerProps): import("react").JSX.Element | null;
