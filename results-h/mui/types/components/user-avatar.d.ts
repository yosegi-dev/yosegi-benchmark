import type { AuthorModel, Density } from "~/models";
export interface UserAvatarProps {
    /** The author the avatar stands for; the image and the alt text both come from it. */
    author: AuthorModel;
    /** Drives the avatar's edge length. */
    density?: Density;
}
export declare function UserAvatar({ author, density }: UserAvatarProps): import("react").JSX.Element;
