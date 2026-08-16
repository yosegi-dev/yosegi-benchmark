export interface WeeklySummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function WeeklySummary({ heading, lines, tone }: WeeklySummaryProps): import("react").JSX.Element;
