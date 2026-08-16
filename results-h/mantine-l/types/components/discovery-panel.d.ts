import type { ReactNode } from "react";
export interface DiscoveryPanelProps {
    /** Panel title. */
    heading: string;
    /** Slot for the panel contents. */
    body: ReactNode;
    /** Slot for a control aligned with the heading. */
    action?: ReactNode;
    /** Hides the body behind the heading. */
    collapsed?: boolean;
    /** Inner spacing preset. */
    spacing?: "tight" | "normal" | "loose";
}
export declare function DiscoveryPanel({ heading, body, action, collapsed, spacing }: DiscoveryPanelProps): import("react").JSX.Element;
