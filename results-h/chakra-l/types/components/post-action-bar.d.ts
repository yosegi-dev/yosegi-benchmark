import type { Density, PostModel } from "~/models";
export interface PostActionBarProps {
    /** The post whose reply, repost and like counts are shown. */
    post: PostModel;
    /** Fired when the reply action is activated. */
    onReplyPress: () => void;
    /** Fired when the repost action is activated. */
    onRepostPress: () => void;
    /** Fired when the like action is activated. */
    onLikePress: () => void;
    /** Controls the button size and the gap between actions. */
    density?: Density;
}
export declare function PostActionBar({ post, onReplyPress, onRepostPress, onLikePress, density, }: PostActionBarProps): import("react").JSX.Element;
