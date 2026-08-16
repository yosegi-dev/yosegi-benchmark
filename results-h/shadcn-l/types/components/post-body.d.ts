import type { Density } from "~/models";
export interface PostBodyProps {
    /** The post text. Newlines are preserved. */
    text: string;
    /** Spacing scale, which here selects the type size. */
    density?: Density;
}
export declare function PostBody({ text, density }: PostBodyProps): import("react").JSX.Element;
