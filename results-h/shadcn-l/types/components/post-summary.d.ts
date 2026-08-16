import type { AuthorModel } from "~/models";
export interface PostSummaryStat {
    label: string;
    value: number;
}
export interface PostSummaryProps {
    author: AuthorModel;
    /** One-line description of what is being summarised. */
    headline: string;
    stats: PostSummaryStat[];
    /** Drops the padding and the avatar down a size. */
    dense?: boolean;
}
export declare function PostSummary({ author, headline, stats, dense }: PostSummaryProps): import("react").JSX.Element;
