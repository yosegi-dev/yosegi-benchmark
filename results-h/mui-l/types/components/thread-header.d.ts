import type { ReactNode } from "react";
export interface ThreadHeaderStat {
    label: string;
    value: number;
}
export interface ThreadHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: ThreadHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function ThreadHeader({ title, subtitle, avatarUrl, stats, actions }: ThreadHeaderProps): import("react").JSX.Element;
