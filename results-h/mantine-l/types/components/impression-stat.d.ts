export interface ImpressionStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function ImpressionStat({ label, value, delta, grouped }: ImpressionStatProps): import("react").JSX.Element;
