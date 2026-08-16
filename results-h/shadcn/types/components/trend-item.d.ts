import type { TrendModel } from "~/models";
export interface TrendItemProps {
    trend: TrendModel;
    /** Position in the panel, rendered as `1 ·`, `2 ·`, and so on. */
    rank: number;
    onTrendPress?: () => void;
}
export declare function TrendItem({ trend, rank, onTrendPress }: TrendItemProps): import("react").JSX.Element;
