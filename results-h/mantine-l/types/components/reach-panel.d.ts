import type { ReactNode } from "react";
export interface ReachPanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function ReachPanel({ title, children, footer, loading }: ReachPanelProps): import("react").JSX.Element;
