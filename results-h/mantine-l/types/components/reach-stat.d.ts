export interface ReachStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function ReachStat({ label, value, delta, grouped }: ReachStatProps): import("react").JSX.Element;
