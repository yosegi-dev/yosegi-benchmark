import type { ReactNode } from "react";
import type { PostModel } from "~/models";
export interface SurveyPreviewProps {
    /** The post this survey preview stands for. */
    post: PostModel;
    /** Draws the reply, repost and like counts under the body. */
    showCounts?: boolean;
    /** Rendered under the counts. */
    footer?: ReactNode;
    /** Caps the body at this many lines. */
    clampLines?: number;
}
export declare function SurveyPreview({ post, showCounts, footer, clampLines }: SurveyPreviewProps): import("react").JSX.Element;
