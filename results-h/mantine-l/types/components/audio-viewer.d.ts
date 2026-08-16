export interface AudioViewerSource {
    src: string;
    caption?: string;
}
export interface AudioViewerProps {
    sources: AudioViewerSource[];
    /** Index of the source on screen. */
    index?: number;
    /** Fired with the index the user moved to. */
    onIndexChange?: (index: number) => void;
    /** Width divided by height of the frame. */
    ratio?: number;
}
export declare function AudioViewer({ sources, index, onIndexChange, ratio }: AudioViewerProps): import("react").JSX.Element | null;
