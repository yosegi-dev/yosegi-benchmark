export interface TranscriptQuoteProps {
    /** The quoted transcript text. */
    quote: string;
    /** Who said it; rendered as the caption. */
    attribution?: string;
    /** Accent draws the coloured bar; neutral leaves it grey. */
    tone?: "neutral" | "accent";
}
export declare function TranscriptQuote({ quote, attribution, tone }: TranscriptQuoteProps): import("react").JSX.Element;
