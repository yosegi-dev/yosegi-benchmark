import type { ReactNode } from "react";
export interface NearbyHeaderStat {
    label: string;
    value: number;
}
export interface NearbyHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: NearbyHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function NearbyHeader({ title, subtitle, avatarUrl, stats, actions }: NearbyHeaderProps): import("react").JSX.Element;
