import type { ReactNode } from "react";
export interface TrendBoardProps {
    /** Board title; a node so callers can add a filter control beside it. */
    heading: ReactNode;
    /** The tiles to lay out. */
    children: ReactNode;
    /** Tiles per row. */
    columns?: 2 | 3 | 4;
    /** Drawn at the bottom edge, e.g. a "see all" link. */
    footer?: ReactNode;
}
export declare function TrendBoard({ heading, children, columns, footer }: TrendBoardProps): import("react").JSX.Element;
