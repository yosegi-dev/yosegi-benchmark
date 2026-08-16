export interface AudioPreviewProps {
    /** Canonical URL of the audio being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function AudioPreview({ url, title, description, thumbnailUrl, onOpen }: AudioPreviewProps): import("react").JSX.Element;
