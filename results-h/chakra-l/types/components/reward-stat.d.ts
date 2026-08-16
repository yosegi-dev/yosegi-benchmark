export interface RewardStatProps {
    /** Metric name shown above the value. */
    label: string;
    /** The already-formatted reward figure. */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    /** Which way the change is read. */
    trend?: "up" | "down" | "flat";
    /** Controls the tile padding. */
    size?: "sm" | "md";
}
export declare function RewardStat({ label, value, delta, trend, size }: RewardStatProps): import("react").JSX.Element;
