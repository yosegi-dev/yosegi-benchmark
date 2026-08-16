export interface PostCardMediaProps {
    src: string;
    alt: string;
    /** Frame the image is cropped into. */
    ratio?: "square" | "wide" | "portrait";
    /** Shown over the bottom edge of the image. */
    caption?: string;
    onClick?: () => void;
}
export declare function PostCardMedia({ src, alt, ratio, caption, onClick, }: PostCardMediaProps): import("react").JSX.Element;
