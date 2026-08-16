import type { AuthorModel } from "~/models";
export interface ProfileSummaryStat {
    label: string;
    value: number;
}
export interface ProfileSummaryProps {
    author: AuthorModel;
    /** One-line description of what is being summarised. */
    headline: string;
    stats: ProfileSummaryStat[];
    /** Drops the padding and the avatar down a size. */
    dense?: boolean;
}
export declare function ProfileSummary({ author, headline, stats, dense }: ProfileSummaryProps): import("react").JSX.Element;
