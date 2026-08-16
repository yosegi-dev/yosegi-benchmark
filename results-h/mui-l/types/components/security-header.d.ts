import type { ReactNode } from "react";
export interface SecurityHeaderStat {
    label: string;
    value: number;
}
export interface SecurityHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: SecurityHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function SecurityHeader({ title, subtitle, avatarUrl, stats, actions }: SecurityHeaderProps): import("react").JSX.Element;
