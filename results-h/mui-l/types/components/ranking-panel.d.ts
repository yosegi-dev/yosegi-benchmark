import type { ReactNode } from "react";
export interface RankingPanelProps {
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
export declare function RankingPanel({ heading, children, actions, footer, dense }: RankingPanelProps): import("react").JSX.Element;
