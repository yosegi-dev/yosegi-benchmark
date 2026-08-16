export interface EngagementSummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function EngagementSummary({ heading, lines, tone }: EngagementSummaryProps): import("react").JSX.Element;
