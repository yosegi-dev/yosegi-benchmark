export interface NotificationStatProps {
    /** Metric name shown above the value. */
    label: string;
    /** The already-formatted notification figure. */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    /** Which way the change is read. */
    trend?: "up" | "down" | "flat";
    /** Controls the tile padding. */
    size?: "sm" | "md";
}
export declare function NotificationStat({ label, value, delta, trend, size }: NotificationStatProps): import("react").JSX.Element;
