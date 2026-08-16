export interface ThreadViewerSource {
    src: string;
    caption?: string;
}
export interface ThreadViewerProps {
    sources: ThreadViewerSource[];
    /** Index of the source on screen. */
    index?: number;
    /** Fired with the index the user moved to. */
    onIndexChange?: (index: number) => void;
    /** Width divided by height of the frame. */
    ratio?: number;
}
export declare function ThreadViewer({ sources, index, onIndexChange, ratio }: ThreadViewerProps): import("react").JSX.Element | null;
