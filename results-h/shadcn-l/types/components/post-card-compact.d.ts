import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface PostCardCompactProps {
    author: AuthorModel;
    /** The post text, rendered inline and clamped to two lines. */
    body: string;
    /** Already-formatted time string shown after the handle. */
    timestamp: string;
    size?: "sm" | "md" | "lg";
    /** Rendered under the body, typically an action row. */
    children?: ReactNode;
    onClick?: () => void;
}
export declare function PostCardCompact({ author, body, timestamp, size, children, onClick, }: PostCardCompactProps): import("react").JSX.Element;
