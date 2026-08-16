export interface KeywordTableProps {
    /** Column keys and their headers, in display order. */
    columns: {
        key: string;
        label: string;
    }[];
    /** One record per row, keyed by the column keys. */
    rows: Record<string, string>[];
    /** Rendered under the table as a caption. */
    caption?: string;
    /** Controls the cell padding. */
    size?: "sm" | "md" | "lg";
    /** Shades alternate rows. */
    striped?: boolean;
}
export declare function KeywordTable({ columns, rows, caption, size, striped }: KeywordTableProps): import("react").JSX.Element;
