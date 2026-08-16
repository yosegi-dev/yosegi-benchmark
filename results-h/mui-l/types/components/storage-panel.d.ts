import type { ReactNode } from "react";
export interface StoragePanelProps {
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
export declare function StoragePanel({ heading, children, actions, footer, dense }: StoragePanelProps): import("react").JSX.Element;
