export interface ReachSummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function ReachSummary({ heading, lines, tone }: ReachSummaryProps): import("react").JSX.Element;
