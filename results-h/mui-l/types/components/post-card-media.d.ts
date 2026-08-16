export interface PostCardMediaProps {
    /** Image URL. One image only; use a gallery for more. */
    src: string;
    alt: string;
    /** Aspect ratio the image is cropped to. */
    ratio?: "square" | "wide" | "tall";
    /** Caption drawn over the bottom edge. */
    caption?: string;
    /** Marks the image as sensitive and blurs it until it is opened. */
    sensitive?: boolean;
    onClick?: () => void;
}
export declare function PostCardMedia({ src, alt, ratio, caption, sensitive, onClick, }: PostCardMediaProps): import("react").JSX.Element;
