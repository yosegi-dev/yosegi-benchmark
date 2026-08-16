import type { PostModel } from "~/models";
export interface QuoteFeedProps {
    posts: PostModel[];
    /** Replaces the list with placeholders. */
    loading?: boolean;
    /** Text shown when there is nothing to list. */
    emptyLabel?: string;
    onPostSelect?: (id: string) => void;
}
export declare function QuoteFeed({ posts, loading, emptyLabel, onPostSelect }: QuoteFeedProps): import("react").JSX.Element;
