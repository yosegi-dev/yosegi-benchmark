import type { ReactNode } from "react";
import type { PostModel } from "~/models";
export interface ArchivePreviewProps {
    /** The post this archive preview stands for. */
    post: PostModel;
    /** Draws the reply, repost and like counts under the body. */
    showCounts?: boolean;
    /** Rendered under the counts. */
    footer?: ReactNode;
    /** Caps the body at this many lines. */
    clampLines?: number;
}
export declare function ArchivePreview({ post, showCounts, footer, clampLines }: ArchivePreviewProps): import("react").JSX.Element;
