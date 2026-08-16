import type { ReactNode } from "react";
export interface TrendBoardProps {
    /** Board title. */
    title: string;
    /** Number of columns the tiles are laid out in. */
    columns?: number;
    /** The tiles. */
    children: ReactNode;
}
export declare function TrendBoard({ title, columns, children }: TrendBoardProps): import("react").JSX.Element;
