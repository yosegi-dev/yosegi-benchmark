import type { Density } from "~/models";
export interface PostMediaProps {
    /** Attached images, laid out in a one- or two-column grid. */
    images: {
        url: string;
        alt: string;
    }[];
    /** Drives the gap between images and their height. */
    density?: Density;
}
export declare function PostMedia({ images, density }: PostMediaProps): import("react").JSX.Element | null;
