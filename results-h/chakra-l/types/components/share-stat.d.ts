export interface ShareStatProps {
    /** Metric name shown above the value. */
    label: string;
    /** The already-formatted share figure. */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    /** Which way the change is read. */
    trend?: "up" | "down" | "flat";
    /** Controls the tile padding. */
    size?: "sm" | "md";
}
export declare function ShareStat({ label, value, delta, trend, size }: ShareStatProps): import("react").JSX.Element;
