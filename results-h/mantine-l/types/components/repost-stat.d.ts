export interface RepostStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function RepostStat({ label, value, delta, grouped }: RepostStatProps): import("react").JSX.Element;
