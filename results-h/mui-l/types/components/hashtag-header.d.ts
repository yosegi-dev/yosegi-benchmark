import type { ReactNode } from "react";
export interface HashtagHeaderStat {
    label: string;
    value: number;
}
export interface HashtagHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: HashtagHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function HashtagHeader({ title, subtitle, avatarUrl, stats, actions }: HashtagHeaderProps): import("react").JSX.Element;
