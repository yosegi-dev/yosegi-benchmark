import type { Density } from "~/models";
export interface PostMediaProps {
    /** Images attached to the post; `alt` is required on each. */
    images: {
        url: string;
        alt: string;
    }[];
    /** Drives the gap between images and the overall height. */
    density?: Density;
}
export declare function PostMedia({ images, density }: PostMediaProps): import("react").JSX.Element | null;
