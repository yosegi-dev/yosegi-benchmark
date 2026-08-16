import type { AuthorModel } from "~/models";
export interface UserAvatarGroupProps {
    /** The accounts to stack, in display order. */
    users: AuthorModel[];
    /** How many avatars to show before collapsing the rest into a "+n" chip. */
    max?: number;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function UserAvatarGroup({ users, max, size }: UserAvatarGroupProps): import("react").JSX.Element;
