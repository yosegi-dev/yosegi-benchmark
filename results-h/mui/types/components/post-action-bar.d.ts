import type { Density, PostModel } from "~/models";
export interface PostActionBarProps {
    /** Counts and the viewer's like state are read straight off the post. */
    post: PostModel;
    onReplyPress: () => void;
    onRepostPress: () => void;
    onLikePress: () => void;
    /** Drives the size of every button in the bar. */
    density?: Density;
}
export declare function PostActionBar({ post, onReplyPress, onRepostPress, onLikePress, density, }: PostActionBarProps): import("react").JSX.Element;
