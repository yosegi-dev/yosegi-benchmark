import type { ReactNode } from "react";
import type { PostModel } from "~/models";
export interface QuotedPostProps {
    /** The post being quoted; its author line and body are rendered inline. */
    post: PostModel;
    /** Slot for the quoted author's avatar. */
    avatar: ReactNode;
}
export declare function QuotedPost({ post, avatar }: QuotedPostProps): import("react").JSX.Element;
