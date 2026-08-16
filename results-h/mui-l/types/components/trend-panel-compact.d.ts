import type { TrendModel } from "~/models";
export interface TrendPanelCompactProps {
    /** Panel title. */
    title: string;
    /** Rows to draw; the panel renders them itself. */
    trends: TrendModel[];
    /** Rows shown before the "show more" link. */
    limit?: number;
    /** Overall scale of the rows. */
    size?: "sm" | "md";
    /** Fired with the id of the row that was clicked. */
    onTrendClick?: (trendId: string) => void;
}
export declare function TrendPanelCompact({ title, trends, limit, size, onTrendClick }: TrendPanelCompactProps): import("react").JSX.Element;
