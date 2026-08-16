export interface PostCardSkeletonProps {
    /** How many body placeholder lines to draw. */
    lines?: number;
    size?: "sm" | "md" | "lg";
    /** Draws an extra block where an image would be. */
    showMedia?: boolean;
}
export declare function PostCardSkeleton({ lines, size, showMedia, }: PostCardSkeletonProps): import("react").JSX.Element;
