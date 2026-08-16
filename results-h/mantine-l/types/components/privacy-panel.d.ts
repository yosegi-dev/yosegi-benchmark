import type { ReactNode } from "react";
export interface PrivacyPanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function PrivacyPanel({ title, children, footer, loading }: PrivacyPanelProps): import("react").JSX.Element;
