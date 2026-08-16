import type { ReactNode } from "react";
import type { PostModel } from "~/models";
export interface SyncPreviewProps {
    /** The post this sync preview stands for. */
    post: PostModel;
    /** Draws the reply, repost and like counts under the body. */
    showCounts?: boolean;
    /** Rendered under the counts. */
    footer?: ReactNode;
    /** Caps the body at this many lines. */
    clampLines?: number;
}
export declare function SyncPreview({ post, showCounts, footer, clampLines }: SyncPreviewProps): import("react").JSX.Element;
