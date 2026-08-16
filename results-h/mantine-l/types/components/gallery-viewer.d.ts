export interface GalleryViewerSource {
    src: string;
    caption?: string;
}
export interface GalleryViewerProps {
    sources: GalleryViewerSource[];
    /** Index of the source on screen. */
    index?: number;
    /** Fired with the index the user moved to. */
    onIndexChange?: (index: number) => void;
    /** Width divided by height of the frame. */
    ratio?: number;
}
export declare function GalleryViewer({ sources, index, onIndexChange, ratio }: GalleryViewerProps): import("react").JSX.Element | null;
