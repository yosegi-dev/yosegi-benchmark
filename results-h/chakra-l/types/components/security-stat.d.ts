export interface SecurityStatProps {
    /** Metric name shown above the value. */
    label: string;
    /** The already-formatted security figure. */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    /** Which way the change is read. */
    trend?: "up" | "down" | "flat";
    /** Controls the tile padding. */
    size?: "sm" | "md";
}
export declare function SecurityStat({ label, value, delta, trend, size }: SecurityStatProps): import("react").JSX.Element;
