export interface LocationPreviewProps {
    /** Canonical URL of the location being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function LocationPreview({ url, title, description, thumbnailUrl, onOpen }: LocationPreviewProps): import("react").JSX.Element;
