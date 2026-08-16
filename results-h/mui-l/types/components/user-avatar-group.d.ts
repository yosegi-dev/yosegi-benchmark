import type { AuthorModel } from "~/models";
export interface UserAvatarGroupProps {
    /** Everyone in the group, in display order. */
    authors: AuthorModel[];
    /** Avatars shown before the overflow counter appears. */
    max?: number;
    /** Overall scale of each avatar. */
    size?: "sm" | "md" | "lg";
    /** Total the counter should report, when it is larger than `authors`. */
    total?: number;
}
export declare function UserAvatarGroup({ authors, max, size, total }: UserAvatarGroupProps): import("react").JSX.Element;
