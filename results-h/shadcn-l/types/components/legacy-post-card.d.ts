import type { ReactNode } from "react";
export interface LegacyPostCardProps {
    /** Headline shown above the body; posts without one pass an empty string. */
    title: string;
    body: string;
    authorName: string;
    authorAvatarUrl: string;
    /** Pre-formatted relative time, e.g. `"2 hours ago"`. */
    timeAgo: string;
    variant?: "default" | "outlined" | "elevated";
    /** Rendered at the bottom of the card, typically the action row. */
    children?: ReactNode;
    onClick?: () => void;
}
export declare function LegacyPostCard({ title, body, authorName, authorAvatarUrl, timeAgo, variant, children, onClick, }: LegacyPostCardProps): import("react").JSX.Element;
