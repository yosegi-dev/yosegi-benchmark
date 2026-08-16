export interface LikeStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function LikeStat({ label, value, delta, grouped }: LikeStatProps): import("react").JSX.Element;
