import type { ReactNode } from "react";
export interface RecoverySummaryProps {
    /** The recovery facts, in display order. */
    rows: {
        label: string;
        value: string;
    }[];
    /** Stacks the label above the value when vertical. */
    orientation?: "horizontal" | "vertical";
    /** Rendered under the list. */
    footer?: ReactNode;
    /** Controls the row height. */
    size?: "sm" | "md" | "lg";
}
export declare function RecoverySummary({ rows, orientation, footer, size }: RecoverySummaryProps): import("react").JSX.Element;
