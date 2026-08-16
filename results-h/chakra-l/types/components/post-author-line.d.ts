import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostAuthorLineProps {
    /** The post's author. */
    author: AuthorModel;
    /** Relative time since the post was created, already formatted (e.g. "2h"). */
    label: string;
    /** Slot for the author's avatar. */
    avatar: ReactNode;
    /** When set, a small badge naming the post's audience is shown. */
    visibility?: Visibility;
}
export declare function PostAuthorLine({ author, label, avatar, visibility }: PostAuthorLineProps): import("react").JSX.Element;
