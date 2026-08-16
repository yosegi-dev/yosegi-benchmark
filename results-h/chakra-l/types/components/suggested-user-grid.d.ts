import type { ReactNode } from "react";
export interface SuggestedUserGridProps {
    /** Section title rendered above the grid. */
    heading: string;
    /** How many cards sit in a row. */
    columns?: number;
    /** The account cards to lay out. */
    children: ReactNode;
}
export declare function SuggestedUserGrid({ heading, columns, children }: SuggestedUserGridProps): import("react").JSX.Element;
