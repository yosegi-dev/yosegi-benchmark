export interface AvatarStackProps {
    /** Image URLs, drawn left to right with the first on top. */
    srcs: string[];
    /** Edge length in pixels. */
    size?: number;
    /** How far each avatar slides under the previous one. */
    overlap?: "tight" | "loose";
}
export declare function AvatarStack({ srcs, size, overlap }: AvatarStackProps): import("react").JSX.Element;
