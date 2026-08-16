import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostAuthorLineProps {
    author: AuthorModel;
    /** Trailing text after the handle, e.g. the relative post time `"2h"`. */
    label: string;
    /** Slot for the author's avatar. */
    avatar: ReactNode;
    /** When set, a small audience marker is rendered after the label. */
    visibility?: Visibility;
}
export declare function PostAuthorLine({ author, label, avatar, visibility, }: PostAuthorLineProps): import("react").JSX.Element;
