import type { TrendModel } from "~/models";
export interface TrendPanelCompactProps {
    /** Panel title. */
    title: string;
    /** The trends to list; the panel renders the rows itself. */
    trends: TrendModel[];
    /** Controls the panel padding. */
    size?: "sm" | "md";
    /** Fired with the id of the trend that was activated. */
    onTrendSelect?: (id: string) => void;
}
export declare function TrendPanelCompact({ title, trends, size, onTrendSelect, }: TrendPanelCompactProps): import("react").JSX.Element;
