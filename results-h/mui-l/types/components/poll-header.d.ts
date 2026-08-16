import type { ReactNode } from "react";
export interface PollHeaderStat {
    label: string;
    value: number;
}
export interface PollHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: PollHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function PollHeader({ title, subtitle, avatarUrl, stats, actions }: PollHeaderProps): import("react").JSX.Element;
