export type Visibility = "public" | "followers" | "circle" | "unlisted";
export type FeedKind = "for-you" | "following" | "list";
export type Density = "compact" | "cozy" | "roomy";
export type ActionTone = "reply" | "repost" | "like" | "quiet";
export interface AuthorModel {
    id: string;
    displayName: string;
    handle: string;
    avatarUrl: string;
    verified?: boolean;
}
export interface PostModel {
    id: string;
    author: AuthorModel;
    body: string;
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
    category?: string;
}
