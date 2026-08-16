export interface AvatarStackProps {
    /** Absolute image URLs, in stacking order. */
    srcs: string[];
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
    /** Maximum avatars rendered; the remainder is dropped silently. */
    limit?: number;
}
export declare function AvatarStack({ srcs, size, limit }: AvatarStackProps): import("react").JSX.Element;
