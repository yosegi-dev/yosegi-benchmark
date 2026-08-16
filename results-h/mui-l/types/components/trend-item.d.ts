import type { TrendModel } from "~/models";
export interface TrendItemProps {
    trend: TrendModel;
    /** Position in the trend list, shown as "#1". */
    rank: number;
    onTrendPress?: () => void;
}
export declare function TrendItem({ trend, rank, onTrendPress }: TrendItemProps): import("react").JSX.Element;
