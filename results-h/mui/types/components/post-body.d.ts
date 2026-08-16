import type { Density } from "~/models";
export interface PostBodyProps {
    /** The post text, rendered as-is with newlines preserved. */
    text: string;
    /** Drives the type scale. */
    density?: Density;
}
export declare function PostBody({ text, density }: PostBodyProps): import("react").JSX.Element;
