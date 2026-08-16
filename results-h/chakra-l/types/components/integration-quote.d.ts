export interface IntegrationQuoteProps {
    /** The quoted integration text. */
    quote: string;
    /** Who said it; rendered as the caption. */
    attribution?: string;
    /** Accent draws the coloured bar; neutral leaves it grey. */
    tone?: "neutral" | "accent";
}
export declare function IntegrationQuote({ quote, attribution, tone }: IntegrationQuoteProps): import("react").JSX.Element;
