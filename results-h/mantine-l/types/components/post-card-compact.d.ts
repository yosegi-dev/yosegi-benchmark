import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface PostCardCompactProps {
    /** Who wrote the post. */
    author: AuthorModel;
    /** The post text. */
    body: string;
    /** Preformatted time string shown after the handle. */
    timestamp: string;
    /** Row height preset. */
    size?: "sm" | "md";
    /** Rendered under the body, typically a row of controls. */
    children?: ReactNode;
}
export declare function PostCardCompact({ author, body, timestamp, size, children, }: PostCardCompactProps): import("react").JSX.Element;
