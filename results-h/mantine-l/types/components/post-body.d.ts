import type { Density } from "~/models";
export interface PostBodyProps {
    /** The post text; passed as a prop rather than as children. */
    text: string;
    /** Drives the text size and line height. */
    density?: Density;
}
export declare function PostBody({ text, density }: PostBodyProps): import("react").JSX.Element;
