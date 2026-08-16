import type { ReactNode } from "react";
export interface InviteHeaderStat {
    label: string;
    value: number;
}
export interface InviteHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: InviteHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function InviteHeader({ title, subtitle, avatarUrl, stats, actions }: InviteHeaderProps): import("react").JSX.Element;
