import type { PostModel } from "~/models";
export interface MediaFeedProps {
    posts: PostModel[];
    /** Replaces the list with placeholders. */
    loading?: boolean;
    /** Text shown when there is nothing to list. */
    emptyLabel?: string;
    onPostSelect?: (id: string) => void;
}
export declare function MediaFeed({ posts, loading, emptyLabel, onPostSelect }: MediaFeedProps): import("react").JSX.Element;
