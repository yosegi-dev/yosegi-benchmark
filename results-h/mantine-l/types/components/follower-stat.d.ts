export interface FollowerStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function FollowerStat({ label, value, delta, grouped }: FollowerStatProps): import("react").JSX.Element;
