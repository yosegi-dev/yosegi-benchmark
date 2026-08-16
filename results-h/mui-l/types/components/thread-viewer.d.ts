export interface ThreadViewerFrame {
    url: string;
    alt: string;
    /** Drawn under the frame when set. */
    caption?: string;
}
export interface ThreadViewerProps {
    /** Frames to page through. */
    frames: ThreadViewerFrame[];
    /** Index of the visible frame; the viewer is controlled. */
    index: number;
    /** Fired with the index to move to. */
    onIndexChange: (index: number) => void;
    /** Aspect ratio the frame is cropped to. */
    ratio?: "square" | "wide" | "tall";
}
export declare function ThreadViewer({ frames, index, onIndexChange, ratio }: ThreadViewerProps): import("react").JSX.Element | null;
