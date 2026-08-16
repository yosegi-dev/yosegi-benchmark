export interface PostCardMediaProps {
    /** Absolute URL of the single image to show. */
    src: string;
    /** Alternative text for the image. */
    alt: string;
    /** Width divided by height; 16/9 by default. */
    ratio?: number;
    /** Rendered under the image in muted text. */
    caption?: string;
    /** Fired when the image is activated. */
    onClick?: () => void;
}
export declare function PostCardMedia({ src, alt, ratio, caption, onClick }: PostCardMediaProps): import("react").JSX.Element;
