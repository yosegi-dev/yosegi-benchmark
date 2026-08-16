export interface HighlightSummaryProps {
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
export declare function HighlightSummary({ label, value, total, caption, color }: HighlightSummaryProps): import("react").JSX.Element;
