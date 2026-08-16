export interface LegacyPostCardProps {
    /** Row key used by the old feed endpoint. */
    postId: string;
    displayName: string;
    handle: string;
    avatarUrl: string;
    /** Post text. */
    text: string;
    /** Pre-formatted timestamp. */
    time: string;
    replies: number;
    reposts: number;
    likes: number;
    /** True when the signed-in user has liked the post. */
    liked?: boolean;
    onClick?: () => void;
}
export declare function LegacyPostCard({ postId, displayName, handle, avatarUrl, text, time, replies, reposts, likes, liked, onClick, }: LegacyPostCardProps): import("react").JSX.Element;
