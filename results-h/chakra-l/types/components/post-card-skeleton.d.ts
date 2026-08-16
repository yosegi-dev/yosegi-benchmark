export interface PostCardSkeletonProps {
    /** How many body lines to fake before the media block. */
    lines?: number;
    /** Reserves a 16:9 block where the attachment would go. */
    showMedia?: boolean;
    /** Controls the card padding. */
    size?: "sm" | "md" | "lg";
}
export declare function PostCardSkeleton({ lines, showMedia, size }: PostCardSkeletonProps): import("react").JSX.Element;
