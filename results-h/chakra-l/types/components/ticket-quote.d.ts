export interface TicketQuoteProps {
    /** The quoted ticket text. */
    quote: string;
    /** Who said it; rendered as the caption. */
    attribution?: string;
    /** Accent draws the coloured bar; neutral leaves it grey. */
    tone?: "neutral" | "accent";
}
export declare function TicketQuote({ quote, attribution, tone }: TicketQuoteProps): import("react").JSX.Element;
