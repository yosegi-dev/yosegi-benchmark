export interface BookmarkViewerFrame {
    url: string;
    alt: string;
    /** Drawn under the frame when set. */
    caption?: string;
}
export interface BookmarkViewerProps {
    /** Frames to page through. */
    frames: BookmarkViewerFrame[];
    /** Index of the visible frame; the viewer is controlled. */
    index: number;
    /** Fired with the index to move to. */
    onIndexChange: (index: number) => void;
    /** Aspect ratio the frame is cropped to. */
    ratio?: "square" | "wide" | "tall";
}
export declare function BookmarkViewer({ frames, index, onIndexChange, ratio }: BookmarkViewerProps): import("react").JSX.Element | null;
