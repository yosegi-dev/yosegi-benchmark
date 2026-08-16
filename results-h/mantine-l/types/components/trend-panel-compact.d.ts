export interface TrendPanelCompactProps {
    /** Panel title. */
    title: string;
    /** Rows to show, already ordered by rank. */
    trends: {
        label: string;
        count: number;
    }[];
    size?: "sm" | "md";
}
export declare function TrendPanelCompact({ title, trends, size }: TrendPanelCompactProps): import("react").JSX.Element;
