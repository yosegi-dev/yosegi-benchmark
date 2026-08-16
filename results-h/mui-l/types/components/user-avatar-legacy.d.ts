export interface UserAvatarLegacyProps {
    /** Image URL. The old profile endpoint returned a string, not a user object. */
    src: string;
    /** Used for the alt text and the fallback initial. */
    name: string;
    /** Edge length in px. */
    size?: number;
    /** Draws the verification badge. */
    isVerified?: boolean;
    /** Draws a green presence dot. */
    isOnline?: boolean;
}
export declare function UserAvatarLegacy({ src, name, size, isVerified, isOnline }: UserAvatarLegacyProps): import("react").JSX.Element;
