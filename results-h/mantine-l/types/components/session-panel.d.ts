import type { ReactNode } from "react";
export interface SessionPanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function SessionPanel({ title, children, footer, loading }: SessionPanelProps): import("react").JSX.Element;
