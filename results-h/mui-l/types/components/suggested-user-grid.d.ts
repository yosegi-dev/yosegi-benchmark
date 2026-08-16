import type { ReactNode } from "react";
export interface SuggestedUserGridProps {
    /** Grid title. */
    heading: string;
    /** The cards to lay out. */
    children: ReactNode;
    /** Cards per row. */
    columns?: number;
    /** Removes the surrounding paper so the grid can sit inside another panel. */
    flush?: boolean;
}
export declare function SuggestedUserGrid({ heading, children, columns, flush }: SuggestedUserGridProps): import("react").JSX.Element;
