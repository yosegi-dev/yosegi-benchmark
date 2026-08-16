import type { ReactNode } from "react";
export interface AnalyticsPanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function AnalyticsPanel({ title, children, footer, loading }: AnalyticsPanelProps): import("react").JSX.Element;
