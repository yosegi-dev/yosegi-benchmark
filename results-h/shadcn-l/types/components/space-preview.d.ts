export interface SpacePreviewProps {
    /** Canonical URL of the space being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function SpacePreview({ url, title, description, thumbnailUrl, onOpen }: SpacePreviewProps): import("react").JSX.Element;
