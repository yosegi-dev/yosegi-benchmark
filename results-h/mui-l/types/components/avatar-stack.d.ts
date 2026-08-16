export interface AvatarStackProps {
    /** Image URLs, drawn left to right with the first on top. */
    srcs: string[];
    /** Edge length of each avatar in px. */
    size?: number;
    /** Fraction of an avatar each one overlaps the previous. */
    overlap?: number;
    /** Text drawn after the stack, e.g. "and 12 others". */
    caption?: string;
}
export declare function AvatarStack({ srcs, size, overlap, caption }: AvatarStackProps): import("react").JSX.Element;
