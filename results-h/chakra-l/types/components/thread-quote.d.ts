export interface ThreadQuoteProps {
    /** The quoted thread text. */
    quote: string;
    /** Who said it; rendered as the caption. */
    attribution?: string;
    /** Accent draws the coloured bar; neutral leaves it grey. */
    tone?: "neutral" | "accent";
}
export declare function ThreadQuote({ quote, attribution, tone }: ThreadQuoteProps): import("react").JSX.Element;
