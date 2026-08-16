export interface PostCardSkeletonProps {
    /** How many body lines to draw. */
    lines?: number;
    /** Draws a placeholder block where an image would be. */
    withMedia?: boolean;
    /** Turns the shimmer on or off. */
    animate?: boolean;
}
export declare function PostCardSkeleton({ lines, withMedia, animate, }: PostCardSkeletonProps): import("react").JSX.Element;
