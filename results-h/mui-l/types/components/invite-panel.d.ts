import type { ReactNode } from "react";
export interface InvitePanelProps {
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
export declare function InvitePanel({ heading, children, actions, footer, dense }: InvitePanelProps): import("react").JSX.Element;
