import type { ReactNode } from "react";
export interface AccountPanelProps {
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
export declare function AccountPanel({ heading, body, action, collapsed, spacing }: AccountPanelProps): import("react").JSX.Element;
