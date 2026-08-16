import type { PostModel } from "~/models";
export interface MentionFeedProps {
    posts: PostModel[];
    /** Replaces the list with placeholders. */
    loading?: boolean;
    /** Text shown when there is nothing to list. */
    emptyLabel?: string;
    onPostSelect?: (id: string) => void;
}
export declare function MentionFeed({ posts, loading, emptyLabel, onPostSelect }: MentionFeedProps): import("react").JSX.Element;
