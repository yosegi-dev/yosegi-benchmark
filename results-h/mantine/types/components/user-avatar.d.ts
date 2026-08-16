import type { AuthorModel, Density } from "~/models";
export interface UserAvatarProps {
    /** The whole author; the image, alt text and initials all come from it. */
    author: AuthorModel;
    /** Drives the avatar diameter. */
    density?: Density;
}
export declare function UserAvatar({ author, density }: UserAvatarProps): import("react").JSX.Element;
