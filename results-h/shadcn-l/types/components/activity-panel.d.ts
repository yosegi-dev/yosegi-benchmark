import type { ReactNode } from "react";
export interface ActivityPanelProps {
    heading: string;
    /** The panel's contents. */
    body: ReactNode;
    /** Rendered under a rule at the bottom of the panel. */
    footer?: ReactNode;
    collapsed?: boolean;
    /** Receives the state the panel is moving to. */
    onToggle?: (collapsed: boolean) => void;
}
export declare function ActivityPanel({ heading, body, footer, collapsed, onToggle, }: ActivityPanelProps): import("react").JSX.Element;
