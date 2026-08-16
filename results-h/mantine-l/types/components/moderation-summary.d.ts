export interface ModerationSummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function ModerationSummary({ heading, lines, tone }: ModerationSummaryProps): import("react").JSX.Element;
