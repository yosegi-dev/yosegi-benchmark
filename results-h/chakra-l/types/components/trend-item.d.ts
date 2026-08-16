import type { TrendModel } from "~/models";
export interface TrendItemProps {
    /** The trend this row describes. */
    trend: TrendModel;
    /** 1-based position in the panel, shown before the category. */
    rank: number;
    /** Fired when the row is activated. */
    onTrendPress?: () => void;
}
export declare function TrendItem({ trend, rank, onTrendPress }: TrendItemProps): import("react").JSX.Element;
