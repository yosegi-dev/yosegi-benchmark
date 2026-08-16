import type { ReactNode } from "react";
export interface StorageSummaryProps {
    /** The storage facts, in display order. */
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
export declare function StorageSummary({ rows, orientation, footer, size }: StorageSummaryProps): import("react").JSX.Element;
