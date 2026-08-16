import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface PostCardCompactProps {
    author: AuthorModel;
    /** Post text, truncated to `maxLines`. */
    body: string;
    /** Pre-formatted timestamp shown after the handle. */
    timestamp: string;
    /** Overall scale of the row. */
    size?: "sm" | "md" | "lg";
    /** Lines of body text before truncation. */
    maxLines?: number;
    /** Rendered under the body, typically a footer or an action row. */
    children?: ReactNode;
    onClick?: () => void;
}
export declare function PostCardCompact({ author, body, timestamp, size, maxLines, children, onClick, }: PostCardCompactProps): import("react").JSX.Element;
