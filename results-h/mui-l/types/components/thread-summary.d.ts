export interface ThreadSummaryProps {
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
export declare function ThreadSummary({ label, value, total, caption, color }: ThreadSummaryProps): import("react").JSX.Element;
