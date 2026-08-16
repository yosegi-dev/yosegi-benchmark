export interface ArticlePreviewProps {
    /** Canonical URL of the article being previewed. */
    url: string;
    title: string;
    description?: string;
    /** Leading thumbnail; the icon is drawn when it is absent. */
    thumbnailUrl?: string;
    onOpen?: () => void;
}
export declare function ArticlePreview({ url, title, description, thumbnailUrl, onOpen }: ArticlePreviewProps): import("react").JSX.Element;
