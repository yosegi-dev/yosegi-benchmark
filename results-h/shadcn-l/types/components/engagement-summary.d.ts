import type { AuthorModel } from "~/models";
export interface EngagementSummaryStat {
    label: string;
    value: number;
}
export interface EngagementSummaryProps {
    author: AuthorModel;
    /** One-line description of what is being summarised. */
    headline: string;
    stats: EngagementSummaryStat[];
    /** Drops the padding and the avatar down a size. */
    dense?: boolean;
}
export declare function EngagementSummary({ author, headline, stats, dense }: EngagementSummaryProps): import("react").JSX.Element;
