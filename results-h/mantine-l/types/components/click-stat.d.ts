export interface ClickStatProps {
    /** What the number counts. */
    label: string;
    value: number;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Whether to group thousands with separators. */
    grouped?: boolean;
}
export declare function ClickStat({ label, value, delta, grouped }: ClickStatProps): import("react").JSX.Element;
