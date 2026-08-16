import type { ReactNode } from "react";
import type { Density, PostModel } from "~/models";
export interface PostCardProps {
    /** The post to render; the body text is read from it. */
    post: PostModel;
    /** Slot above the body, holding the author and timestamp. */
    authorLine: ReactNode;
    /** Slot below the body, holding the reply/repost/like controls. */
    actions: ReactNode;
    /** Slot for attached images. */
    media?: ReactNode;
    /** Slot for a post this one quotes. */
    quoted?: ReactNode;
    /** Drives the card padding and body text size. */
    density?: Density;
}
export declare function PostCard({ post, authorLine, actions, media, quoted, density, }: PostCardProps): import("react").JSX.Element;
