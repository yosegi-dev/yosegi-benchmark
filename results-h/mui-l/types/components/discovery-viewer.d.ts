export interface DiscoveryViewerFrame {
    url: string;
    alt: string;
    /** Drawn under the frame when set. */
    caption?: string;
}
export interface DiscoveryViewerProps {
    /** Frames to page through. */
    frames: DiscoveryViewerFrame[];
    /** Index of the visible frame; the viewer is controlled. */
    index: number;
    /** Fired with the index to move to. */
    onIndexChange: (index: number) => void;
    /** Aspect ratio the frame is cropped to. */
    ratio?: "square" | "wide" | "tall";
}
export declare function DiscoveryViewer({ frames, index, onIndexChange, ratio }: DiscoveryViewerProps): import("react").JSX.Element | null;
