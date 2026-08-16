import type { Density } from "~/models";
export interface PostMediaProps {
    /** One entry per image; `alt` is required because posts must stay readable. */
    images: {
        url: string;
        alt: string;
    }[];
    /** Spacing scale, which here selects the gap between images. */
    density?: Density;
}
export declare function PostMedia({ images, density }: PostMediaProps): import("react").JSX.Element | null;
