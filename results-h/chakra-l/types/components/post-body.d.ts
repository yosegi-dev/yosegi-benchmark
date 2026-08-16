import type { Density } from "~/models";
export interface PostBodyProps {
    /** The post text, rendered verbatim with line breaks preserved. */
    text: string;
    /** Controls the font size and line height. */
    density?: Density;
}
export declare function PostBody({ text, density }: PostBodyProps): import("react").JSX.Element;
