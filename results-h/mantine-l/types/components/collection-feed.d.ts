import type { PostModel } from "~/models";
export interface CollectionFeedProps {
    posts: PostModel[];
    /** Replaces the list with placeholders. */
    loading?: boolean;
    /** Text shown when there is nothing to list. */
    emptyLabel?: string;
    onPostSelect?: (id: string) => void;
}
export declare function CollectionFeed({ posts, loading, emptyLabel, onPostSelect }: CollectionFeedProps): import("react").JSX.Element;
