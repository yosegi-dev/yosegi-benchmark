export interface VideoPreviewProps {
    /** Canonical URL of the video being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function VideoPreview({ url, title, description, thumbnailUrl, onOpen }: VideoPreviewProps): import("react").JSX.Element;
