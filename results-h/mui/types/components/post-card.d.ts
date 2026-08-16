import type { ReactNode } from "react";
import type { Density, PostModel } from "~/models";
export interface PostCardProps {
    /** The whole post; the card renders `post.body` itself. */
    post: PostModel;
    /** Slot for the author row above the body. */
    authorLine: ReactNode;
    /** Slot for the reply/repost/like bar below the body. */
    actions: ReactNode;
    /** Slot for attached images, shown under the body. */
    media?: ReactNode;
    /** Slot for a quoted post, shown under the body and above `media`. */
    quoted?: ReactNode;
    /** Drives the card's padding and type scale. */
    density?: Density;
}
export declare function PostCard({ post, authorLine, actions, media, quoted, density }: PostCardProps): import("react").JSX.Element;
