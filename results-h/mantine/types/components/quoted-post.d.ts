import type { ReactNode } from "react";
import type { PostModel } from "~/models";
export interface QuotedPostProps {
    /** The post being quoted. */
    post: PostModel;
    /** Slot for the quoted author's avatar. */
    avatar: ReactNode;
}
export declare function QuotedPost({ post, avatar }: QuotedPostProps): import("react").JSX.Element;
