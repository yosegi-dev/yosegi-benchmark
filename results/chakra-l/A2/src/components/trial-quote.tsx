import { Blockquote } from "@chakra-ui/react";

export interface TrialQuoteProps {
	/** The quoted trial text. */
	quote: string;
	/** Who said it; rendered as the caption. */
	attribution?: string;
	/** Accent draws the coloured bar; neutral leaves it grey. */
	tone?: "neutral" | "accent";
}

export function TrialQuote({ quote, attribution, tone = "neutral" }: TrialQuoteProps) {
	return (
		<Blockquote.Root variant="subtle" colorPalette={tone === "accent" ? "gray" : "gray"}>
			<Blockquote.Content>{quote}</Blockquote.Content>
			{attribution ? <Blockquote.Caption>{attribution}</Blockquote.Caption> : null}
		</Blockquote.Root>
	);
}
