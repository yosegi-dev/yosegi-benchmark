export interface PostCardSkeletonProps {
    /** Body placeholder lines to draw. */
    lines?: number;
    /** Overall scale of the placeholder. */
    size?: "sm" | "md" | "lg";
    /** Draws a media placeholder under the body. */
    showMedia?: boolean;
    /** Number of stacked placeholder cards. */
    repeat?: number;
}
export declare function PostCardSkeleton({ lines, size, showMedia, repeat }: PostCardSkeletonProps): import("react").JSX.Element;
