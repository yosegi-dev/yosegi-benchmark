export interface VideoViewerSource {
    src: string;
    caption?: string;
}
export interface VideoViewerProps {
    sources: VideoViewerSource[];
    /** Index of the source on screen. */
    index?: number;
    /** Fired with the index the user moved to. */
    onIndexChange?: (index: number) => void;
    /** Width divided by height of the frame. */
    ratio?: number;
}
export declare function VideoViewer({ sources, index, onIndexChange, ratio }: VideoViewerProps): import("react").JSX.Element | null;
