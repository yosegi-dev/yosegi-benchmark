import type { TrendModel } from "~/models";
export interface TrendPanelCompactProps {
    title: string;
    /** Rendered in the order given; the panel does not sort. */
    trends: TrendModel[];
    size?: "sm" | "md" | "lg";
    onTrendClick?: (trend: TrendModel) => void;
}
export declare function TrendPanelCompact({ title, trends, size, onTrendClick, }: TrendPanelCompactProps): import("react").JSX.Element;
