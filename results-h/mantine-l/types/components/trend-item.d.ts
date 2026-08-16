import type { TrendModel } from "~/models";
export interface TrendItemProps {
    /** The trend to show. */
    trend: TrendModel;
    /** Position in the list, rendered as "1", "2", … */
    rank: number;
    /** Fired when the row is activated. */
    onTrendPress?: () => void;
}
export declare function TrendItem({ trend, rank, onTrendPress }: TrendItemProps): import("react").JSX.Element;
