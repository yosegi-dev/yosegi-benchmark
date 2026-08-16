import type { Density, PostModel } from "~/models";
export interface PostActionBarProps {
    /** Supplies every count, plus `likedByViewer` for the like button's active state. */
    post: PostModel;
    onReplyPress: () => void;
    onRepostPress: () => void;
    onLikePress: () => void;
    /** Spacing scale, passed through to each action button. */
    density?: Density;
}
export declare function PostActionBar({ post, onReplyPress, onRepostPress, onLikePress, density, }: PostActionBarProps): import("react").JSX.Element;
