export interface MediaViewerSource {
    src: string;
    caption?: string;
}
export interface MediaViewerProps {
    sources: MediaViewerSource[];
    /** Index of the source on screen. */
    index?: number;
    /** Fired with the index the user moved to. */
    onIndexChange?: (index: number) => void;
    /** Width divided by height of the frame. */
    ratio?: number;
}
export declare function MediaViewer({ sources, index, onIndexChange, ratio }: MediaViewerProps): import("react").JSX.Element | null;
