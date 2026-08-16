export interface ShortcutStatProps {
    /** Metric name shown above the value. */
    label: string;
    /** The already-formatted shortcut figure. */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    /** Which way the change is read. */
    trend?: "up" | "down" | "flat";
    /** Controls the tile padding. */
    size?: "sm" | "md";
}
export declare function ShortcutStat({ label, value, delta, trend, size }: ShortcutStatProps): import("react").JSX.Element;
