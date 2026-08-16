export interface SubscriptionSummaryProps {
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
export declare function SubscriptionSummary({ label, value, total, caption, color }: SubscriptionSummaryProps): import("react").JSX.Element;
