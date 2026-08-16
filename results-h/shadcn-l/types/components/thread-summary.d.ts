import type { AuthorModel } from "~/models";
export interface ThreadSummaryStat {
    label: string;
    value: number;
}
export interface ThreadSummaryProps {
    author: AuthorModel;
    /** One-line description of what is being summarised. */
    headline: string;
    stats: ThreadSummaryStat[];
    /** Drops the padding and the avatar down a size. */
    dense?: boolean;
}
export declare function ThreadSummary({ author, headline, stats, dense }: ThreadSummaryProps): import("react").JSX.Element;
