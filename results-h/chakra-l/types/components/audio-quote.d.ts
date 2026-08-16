export interface AudioQuoteProps {
    /** The quoted audio text. */
    quote: string;
    /** Who said it; rendered as the caption. */
    attribution?: string;
    /** Accent draws the coloured bar; neutral leaves it grey. */
    tone?: "neutral" | "accent";
}
export declare function AudioQuote({ quote, attribution, tone }: AudioQuoteProps): import("react").JSX.Element;
