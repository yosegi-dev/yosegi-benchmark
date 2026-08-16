import type { Density } from "~/models";
export interface PostMediaProps {
    /** The attached images, laid out in a grid of at most two columns. */
    images: {
        url: string;
        alt: string;
    }[];
    /** Controls the gap between the images. */
    density?: Density;
}
export declare function PostMedia({ images, density }: PostMediaProps): import("react").JSX.Element | null;
