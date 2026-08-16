import type { ReactNode } from "react";
export interface SuggestedUserGridProps {
    /** Optional title above the grid. */
    heading?: string;
    /** The cards. */
    children: ReactNode;
    columns?: 2 | 3;
}
export declare function SuggestedUserGrid({ heading, children, columns }: SuggestedUserGridProps): import("react").JSX.Element;
