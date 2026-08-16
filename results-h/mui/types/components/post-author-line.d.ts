import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostAuthorLineProps {
    author: AuthorModel;
    /** Relative time since the post was published, already formatted, e.g. "2h". */
    label: string;
    /** Slot for the author's avatar. */
    avatar: ReactNode;
    /** When set, a small audience marker is shown after the timestamp. */
    visibility?: Visibility;
}
export declare function PostAuthorLine({ author, label, avatar, visibility }: PostAuthorLineProps): import("react").JSX.Element;
