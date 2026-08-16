import type { ReactNode } from "react";
export interface AnalyticsPanelProps {
    heading: string;
    /** The panel's contents. */
    body: ReactNode;
    /** Rendered under a rule at the bottom of the panel. */
    footer?: ReactNode;
    collapsed?: boolean;
    /** Receives the state the panel is moving to. */
    onToggle?: (collapsed: boolean) => void;
}
export declare function AnalyticsPanel({ heading, body, footer, collapsed, onToggle, }: AnalyticsPanelProps): import("react").JSX.Element;
