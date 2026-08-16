export interface UserAvatarLegacyProps {
    src: string;
    /** Used for the alt text and for the fallback initial. */
    name: string;
    size?: "sm" | "md" | "lg";
    /** Draws the online dot in the bottom-right corner. */
    showBadge?: boolean;
}
export declare function UserAvatarLegacy({ src, name, size, showBadge, }: UserAvatarLegacyProps): import("react").JSX.Element;
