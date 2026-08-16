export interface AnalyticsSummaryProps {
    /** What is being measured. */
    label: string;
    /** Current amount. */
    value: number;
    /** Amount that counts as full. */
    total: number;
    /** Line under the bar. */
    caption?: string;
    /** Palette of the bar. */
    color?: "primary" | "success" | "warning" | "error";
}
export declare function AnalyticsSummary({ label, value, total, caption, color }: AnalyticsSummaryProps): import("react").JSX.Element;
