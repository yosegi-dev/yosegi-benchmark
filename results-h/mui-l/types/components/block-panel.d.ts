import type { ReactNode } from "react";
export interface BlockPanelProps {
    /** Panel title. */
    heading: string;
    /** Panel contents. */
    children: ReactNode;
    /** Drawn to the right of the heading. */
    actions?: ReactNode;
    /** Drawn under the contents, behind a divider. */
    footer?: ReactNode;
    /** Tightens the padding. */
    dense?: boolean;
}
export declare function BlockPanel({ heading, children, actions, footer, dense }: BlockPanelProps): import("react").JSX.Element;
