export interface LegacyPostCardProps {
    authorName: string;
    authorHandle: string;
    avatarSrc: string;
    /** The post text. */
    text: string;
    /** Preformatted time string, e.g. "2h". */
    time: string;
    likes: number;
    reposts: number;
    replies: number;
    /** Highlights the like count. */
    liked?: boolean;
    onClick?: () => void;
}
export declare function LegacyPostCard({ authorName, authorHandle, avatarSrc, text, time, likes, reposts, replies, liked, onClick, }: LegacyPostCardProps): import("react").JSX.Element;
