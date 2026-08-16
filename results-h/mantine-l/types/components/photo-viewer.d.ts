export interface PhotoViewerSource {
    src: string;
    caption?: string;
}
export interface PhotoViewerProps {
    sources: PhotoViewerSource[];
    /** Index of the source on screen. */
    index?: number;
    /** Fired with the index the user moved to. */
    onIndexChange?: (index: number) => void;
    /** Width divided by height of the frame. */
    ratio?: number;
}
export declare function PhotoViewer({ sources, index, onIndexChange, ratio }: PhotoViewerProps): import("react").JSX.Element | null;
