import type { ReactNode } from "react";
export interface SafetyPanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function SafetyPanel({ title, children, footer, loading }: SafetyPanelProps): import("react").JSX.Element;
