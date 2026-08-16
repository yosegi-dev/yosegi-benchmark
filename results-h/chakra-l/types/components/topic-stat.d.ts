export interface TopicStatProps {
    /** Metric name shown above the value. */
    label: string;
    /** The already-formatted topic figure. */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    /** Which way the change is read. */
    trend?: "up" | "down" | "flat";
    /** Controls the tile padding. */
    size?: "sm" | "md";
}
export declare function TopicStat({ label, value, delta, trend, size }: TopicStatProps): import("react").JSX.Element;
