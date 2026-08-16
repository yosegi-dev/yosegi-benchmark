export interface MentionViewerFrame {
    url: string;
    alt: string;
    /** Drawn under the frame when set. */
    caption?: string;
}
export interface MentionViewerProps {
    /** Frames to page through. */
    frames: MentionViewerFrame[];
    /** Index of the visible frame; the viewer is controlled. */
    index: number;
    /** Fired with the index to move to. */
    onIndexChange: (index: number) => void;
    /** Aspect ratio the frame is cropped to. */
    ratio?: "square" | "wide" | "tall";
}
export declare function MentionViewer({ frames, index, onIndexChange, ratio }: MentionViewerProps): import("react").JSX.Element | null;
