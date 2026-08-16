import type { ReactNode } from "react";
export interface ClipPanelProps {
    /** Panel title. */
    heading: ReactNode;
    /** Panel contents. */
    children: ReactNode;
    /** Drawn to the right of the heading. */
    actions?: ReactNode;
    /** Drawn under the contents, behind a divider. */
    footer?: ReactNode;
    /** Tightens the padding. */
    dense?: boolean;
}
export declare function ClipPanel({ heading, children, actions, footer, dense }: ClipPanelProps): import("react").JSX.Element;
