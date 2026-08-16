export interface ReplyStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function ReplyStat({ label, value, delta, grouped }: ReplyStatProps): import("react").JSX.Element;
