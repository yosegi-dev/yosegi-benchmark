import type { AuthorModel } from "~/models";
export interface LegacyPostCardProps {
    /** The post's author. */
    author: AuthorModel;
    /** The post text. */
    body: string;
    /** Already-formatted timestamp, e.g. "2h". */
    createdAt: string;
    /** Reply count shown on the first action. */
    replies: number;
    /** Repost count shown on the second action. */
    reposts: number;
    /** Like count shown on the third action. */
    likes: number;
    /** Whether the viewer has liked this post. */
    liked: boolean;
    /** Flat drops the shadow; raised keeps it. */
    variant?: "flat" | "raised";
    /** Fired when the card itself is activated. */
    onClick?: () => void;
}
export declare function LegacyPostCard({ author, body, createdAt, replies, reposts, likes, liked, variant, onClick, }: LegacyPostCardProps): import("react").JSX.Element;
