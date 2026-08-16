export interface ThreadSummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function ThreadSummary({ heading, lines, tone }: ThreadSummaryProps): import("react").JSX.Element;
