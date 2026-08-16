export interface PollSummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function PollSummary({ heading, lines, tone }: PollSummaryProps): import("react").JSX.Element;
