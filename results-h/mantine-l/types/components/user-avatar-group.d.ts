export interface UserAvatarGroupProps {
    /** Accounts to show, in display order. */
    users: {
        name: string;
        src: string;
    }[];
    /** How many avatars to show before collapsing the rest into a "+n" chip. */
    limit?: number;
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function UserAvatarGroup({ users, limit, size }: UserAvatarGroupProps): import("react").JSX.Element;
