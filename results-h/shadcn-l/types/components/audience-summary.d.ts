import type { AuthorModel } from "~/models";
export interface AudienceSummaryStat {
    label: string;
    value: number;
}
export interface AudienceSummaryProps {
    author: AuthorModel;
    /** One-line description of what is being summarised. */
    headline: string;
    stats: AudienceSummaryStat[];
    /** Drops the padding and the avatar down a size. */
    dense?: boolean;
}
export declare function AudienceSummary({ author, headline, stats, dense }: AudienceSummaryProps): import("react").JSX.Element;
