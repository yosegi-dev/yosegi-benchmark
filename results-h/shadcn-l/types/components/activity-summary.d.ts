import type { AuthorModel } from "~/models";
export interface ActivitySummaryStat {
    label: string;
    value: number;
}
export interface ActivitySummaryProps {
    author: AuthorModel;
    /** One-line description of what is being summarised. */
    headline: string;
    stats: ActivitySummaryStat[];
    /** Drops the padding and the avatar down a size. */
    dense?: boolean;
}
export declare function ActivitySummary({ author, headline, stats, dense }: ActivitySummaryProps): import("react").JSX.Element;
