export interface AccountSummaryProps {
    heading: string;
    /** One bullet per line. */
    lines: string[];
    /** Colour of the left rule. */
    tone?: "neutral" | "positive" | "negative";
}
export declare function AccountSummary({ heading, lines, tone }: AccountSummaryProps): import("react").JSX.Element;
