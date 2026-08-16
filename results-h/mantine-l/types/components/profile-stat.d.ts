export interface ProfileStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function ProfileStat({ label, value, delta, grouped }: ProfileStatProps): import("react").JSX.Element;
