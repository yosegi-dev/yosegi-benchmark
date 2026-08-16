import type { AuthorModel } from "~/models";
export interface UserAvatarGroupProps {
    users: AuthorModel[];
    /** Avatars shown before the overflow counter takes over. */
    max?: number;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}
export declare function UserAvatarGroup({ users, max, size, onClick, }: UserAvatarGroupProps): import("react").JSX.Element;
