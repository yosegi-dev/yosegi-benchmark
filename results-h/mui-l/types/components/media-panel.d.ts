import type { ReactNode } from "react";
export interface MediaPanelProps {
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
export declare function MediaPanel({ heading, children, actions, footer, dense }: MediaPanelProps): import("react").JSX.Element;
