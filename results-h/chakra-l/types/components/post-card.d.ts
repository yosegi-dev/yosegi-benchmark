import type { ReactNode } from "react";
import type { Density, PostModel } from "~/models";
export interface PostCardProps {
    /** The post this card renders; the body text is read from it. */
    post: PostModel;
    /** Slot for the author line. */
    authorLine: ReactNode;
    /** Slot for the action bar. */
    actions: ReactNode;
    /** Slot for attached media. */
    media?: ReactNode;
    /** Slot for a quoted post. */
    quoted?: ReactNode;
    /** Controls the card padding and the gap between rows. */
    density?: Density;
}
export declare function PostCard({ post, authorLine, actions, media, quoted, density, }: PostCardProps): import("react").JSX.Element;
