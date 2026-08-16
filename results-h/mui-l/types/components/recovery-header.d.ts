import type { ReactNode } from "react";
export interface RecoveryHeaderStat {
    label: string;
    value: number;
}
export interface RecoveryHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: RecoveryHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function RecoveryHeader({ title, subtitle, avatarUrl, stats, actions }: RecoveryHeaderProps): import("react").JSX.Element;
