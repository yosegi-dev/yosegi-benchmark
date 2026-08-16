export interface SubscriptionViewerFrame {
    url: string;
    alt: string;
    /** Drawn under the frame when set. */
    caption?: string;
}
export interface SubscriptionViewerProps {
    /** Frames to page through. */
    frames: SubscriptionViewerFrame[];
    /** Index of the visible frame; the viewer is controlled. */
    index: number;
    /** Fired with the index to move to. */
    onIndexChange: (index: number) => void;
    /** Aspect ratio the frame is cropped to. */
    ratio?: "square" | "wide" | "tall";
}
export declare function SubscriptionViewer({ frames, index, onIndexChange, ratio }: SubscriptionViewerProps): import("react").JSX.Element | null;
