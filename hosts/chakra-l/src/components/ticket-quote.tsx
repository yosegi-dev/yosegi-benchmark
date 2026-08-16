import { Blockquote } from "@chakra-ui/react";

export interface TicketQuoteProps {
	/** The quoted ticket text. */
	quote: string;
	/** Who said it; rendered as the caption. */
	attribution?: string;
	/** Accent draws the coloured bar; neutral leaves it grey. */
	tone?: "neutral" | "accent";
}

export function TicketQuote({ quote, attribution, tone = "neutral" }: TicketQuoteProps) {
	return (
		<Blockquote.Root variant="subtle" colorPalette={tone === "accent" ? "teal" : "gray"}>
			<Blockquote.Content>{quote}</Blockquote.Content>
			{attribution ? <Blockquote.Caption>{attribution}</Blockquote.Caption> : null}
		</Blockquote.Root>
	);
}
