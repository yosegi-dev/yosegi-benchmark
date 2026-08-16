import type { PostModel } from "~/models";
export interface ReplyFeedProps {
    posts: PostModel[];
    /** Replaces the list with placeholders. */
    loading?: boolean;
    /** Text shown when there is nothing to list. */
    emptyLabel?: string;
    onPostSelect?: (id: string) => void;
}
export declare function ReplyFeed({ posts, loading, emptyLabel, onPostSelect }: ReplyFeedProps): import("react").JSX.Element;
