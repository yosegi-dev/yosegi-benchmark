import type { AuthorModel, Density } from "~/models";
export interface UserAvatarProps {
    /** The image and the fallback initials are both derived from this model. */
    author: AuthorModel;
    /** Spacing scale, which here selects the avatar size. */
    density?: Density;
}
export declare function UserAvatar({ author, density }: UserAvatarProps): import("react").JSX.Element;
