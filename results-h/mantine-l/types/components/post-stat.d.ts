export interface PostStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function PostStat({ label, value, delta, grouped }: PostStatProps): import("react").JSX.Element;
