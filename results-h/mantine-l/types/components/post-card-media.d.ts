export interface PostCardMediaProps {
    /** URL of the single attached image. */
    src: string;
    /** Shown beneath the image and used as its alt text. */
    caption?: string;
    /** Width divided by height of the frame. */
    ratio?: number;
    onClick?: () => void;
}
export declare function PostCardMedia({ src, caption, ratio, onClick }: PostCardMediaProps): import("react").JSX.Element;
