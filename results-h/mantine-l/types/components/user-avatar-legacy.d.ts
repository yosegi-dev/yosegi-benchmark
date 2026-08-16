export interface UserAvatarLegacyProps {
    src: string;
    alt: string;
    /** Diameter in px. */
    size?: number;
    /** Draws the blue check dot. */
    isVerified?: boolean;
    onClick?: () => void;
}
export declare function UserAvatarLegacy({ src, alt, size, isVerified, onClick, }: UserAvatarLegacyProps): import("react").JSX.Element;
