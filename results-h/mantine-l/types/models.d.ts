/** Who can see a post. */
export type Visibility = "public" | "followers" | "circle" | "unlisted";
/** Which timeline feed is being shown. */
export type FeedKind = "for-you" | "following" | "list";
/** How much vertical breathing room a component takes. */
export type Density = "compact" | "cozy" | "roomy";
/** The intent of an action control, which drives its colour and emphasis. */
export type ActionTone = "reply" | "repost" | "like" | "quiet";
export interface AuthorModel {
    id: string;
    displayName: string;
    /** Without the leading "@". */
    handle: string;
    avatarUrl: string;
    verified?: boolean;
}
export interface PostModel {
    id: string;
    author: AuthorModel;
    body: string;
    /** ISO 8601 timestamp. */
    createdAt: string;
    visibility: Visibility;
    replyCount: number;
    repostCount: number;
    likeCount: number;
    likedByViewer: boolean;
}
export interface TrendModel {
    id: string;
    label: string;
    postCount: number;
    /** e.g. "Technology" — shown above the label when present. */
    category?: string;
}
