import type { ReactNode } from "react";
import type { Density, PostModel } from "~/models";
export interface PostCardProps {
    /** The whole post. The card renders `post.body` itself. */
    post: PostModel;
    /** Slot for the author row above the body. */
    authorLine: ReactNode;
    /** Slot for the action bar below the body. */
    actions: ReactNode;
    /** Slot for attached media, rendered under the body. */
    media?: ReactNode;
    /** Slot for a quoted post, rendered under the media. */
    quoted?: ReactNode;
    /** Spacing scale applied to the card's padding and gaps. */
    density?: Density;
}
export declare function PostCard({ post, authorLine, actions, media, quoted, density, }: PostCardProps): import("react").JSX.Element;
