import type { AuthorModel, Density } from "~/models";
export interface UserAvatarProps {
    /** The author to portray; the image and the initials fallback both come from it. */
    author: AuthorModel;
    /** Controls the avatar size. */
    density?: Density;
}
export declare function UserAvatar({ author, density }: UserAvatarProps): import("react").JSX.Element;
