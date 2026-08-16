export interface UserAvatarLegacyProps {
    /** Absolute URL of the avatar image. */
    src: string;
    /** Used for the alt text and for the initials fallback. */
    name: string;
    /** Named sizes kept from the pre-token design system. */
    size?: "small" | "medium" | "large";
    /** Draws a green presence dot at the bottom-right. */
    showBadge?: boolean;
}
export declare function UserAvatarLegacy({ src, name, size, showBadge }: UserAvatarLegacyProps): import("react").JSX.Element;
