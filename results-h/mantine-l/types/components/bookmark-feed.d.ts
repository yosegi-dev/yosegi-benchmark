import type { PostModel } from "~/models";
export interface BookmarkFeedProps {
    posts: PostModel[];
    /** Replaces the list with placeholders. */
    loading?: boolean;
    /** Text shown when there is nothing to list. */
    emptyLabel?: string;
    onPostSelect?: (id: string) => void;
}
export declare function BookmarkFeed({ posts, loading, emptyLabel, onPostSelect }: BookmarkFeedProps): import("react").JSX.Element;
