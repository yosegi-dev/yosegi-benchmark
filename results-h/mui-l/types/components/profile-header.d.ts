import type { ReactNode } from "react";
export interface ProfileHeaderStat {
    label: string;
    value: number;
}
export interface ProfileHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image drawn at the leading edge. */
    avatarUrl?: string;
    /** Counters drawn under the title. */
    stats?: ProfileHeaderStat[];
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function ProfileHeader({ title, subtitle, avatarUrl, stats, actions }: ProfileHeaderProps): import("react").JSX.Element;
