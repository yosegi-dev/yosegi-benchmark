export interface LinkPreviewProps {
    /** Canonical URL of the link being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function LinkPreview({ url, title, description, thumbnailUrl, onOpen }: LinkPreviewProps): import("react").JSX.Element;
