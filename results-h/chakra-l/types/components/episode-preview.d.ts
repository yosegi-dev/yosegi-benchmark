import type { ReactNode } from "react";
import type { PostModel } from "~/models";
export interface EpisodePreviewProps {
    /** The post this episode preview stands for. */
    post: PostModel;
    /** Draws the reply, repost and like counts under the body. */
    showCounts?: boolean;
    /** Rendered under the counts. */
    footer?: ReactNode;
    /** Caps the body at this many lines. */
    clampLines?: number;
}
export declare function EpisodePreview({ post, showCounts, footer, clampLines }: EpisodePreviewProps): import("react").JSX.Element;
