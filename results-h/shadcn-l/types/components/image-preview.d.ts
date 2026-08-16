export interface ImagePreviewProps {
    /** Canonical URL of the image being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function ImagePreview({ url, title, description, thumbnailUrl, onOpen }: ImagePreviewProps): import("react").JSX.Element;
