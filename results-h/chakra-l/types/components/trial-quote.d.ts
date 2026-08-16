export interface TrialQuoteProps {
    /** The quoted trial text. */
    quote: string;
    /** Who said it; rendered as the caption. */
    attribution?: string;
    /** Accent draws the coloured bar; neutral leaves it grey. */
    tone?: "neutral" | "accent";
}
export declare function TrialQuote({ quote, attribution, tone }: TrialQuoteProps): import("react").JSX.Element;
