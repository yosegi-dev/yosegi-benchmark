export interface EngagementStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function EngagementStat({ label, value, delta, grouped }: EngagementStatProps): import("react").JSX.Element;
