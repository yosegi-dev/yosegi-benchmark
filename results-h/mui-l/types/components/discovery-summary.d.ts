export interface DiscoverySummaryProps {
    /** What is being measured. */
    label: string;
    /** Current amount. */
    value: number;
    /** Amount that counts as full. */
    total: number;
    /** Formats the value as a percentage instead of a count. */
    asPercent?: boolean;
    /** Palette of the bar. */
    color?: "primary" | "success" | "warning" | "error";
}
export declare function DiscoverySummary({ label, value, total, asPercent, color }: DiscoverySummaryProps): import("react").JSX.Element;
