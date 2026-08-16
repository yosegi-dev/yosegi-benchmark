import type { Density, PostModel } from "~/models";
export interface PostActionBarProps {
    /** The post whose counts and liked state are shown. */
    post: PostModel;
    /** Fired when reply is activated. */
    onReplyPress: () => void;
    /** Fired when repost is activated. */
    onRepostPress: () => void;
    /** Fired when like is activated. */
    onLikePress: () => void;
    /** Drives the size of the buttons. */
    density?: Density;
}
export declare function PostActionBar({ post, onReplyPress, onRepostPress, onLikePress, density, }: PostActionBarProps): import("react").JSX.Element;
