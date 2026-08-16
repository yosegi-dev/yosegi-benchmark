import type { ReactNode } from "react";
export interface PostCardCompactProps {
    /** Display name shown first on the author line. */
    authorName: string;
    /** Handle without the leading "@". */
    handle: string;
    /** Absolute URL of the author's avatar. */
    avatarUrl: string;
    /** The post text. */
    body: string;
    /** Already-formatted timestamp, e.g. "2h". */
    timestamp: string;
    /** Controls the card padding. */
    size?: "sm" | "md" | "lg";
    /** Rendered below the body — attachments, action rows, anything trailing. */
    children?: ReactNode;
    /** Fired when the card itself is activated. */
    onClick?: () => void;
}
export declare function PostCardCompact({ authorName, handle, avatarUrl, body, timestamp, size, children, onClick, }: PostCardCompactProps): import("react").JSX.Element;
