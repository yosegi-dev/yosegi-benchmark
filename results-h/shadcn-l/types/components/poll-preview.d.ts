export interface PollPreviewProps {
    /** Canonical URL of the poll being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function PollPreview({ url, title, description, thumbnailUrl, onOpen }: PollPreviewProps): import("react").JSX.Element;
