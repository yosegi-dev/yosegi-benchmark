import { Blockquote } from "@chakra-ui/react";

export interface AudioQuoteProps {
	/** The quoted audio text. */
	quote: string;
	/** Who said it; rendered as the caption. */
	attribution?: string;
	/** Accent draws the coloured bar; neutral leaves it grey. */
	tone?: "neutral" | "accent";
}

export function AudioQuote({ quote, attribution, tone = "neutral" }: AudioQuoteProps) {
	return (
		<Blockquote.Root variant="subtle" colorPalette={tone === "accent" ? "green" : "gray"}>
			<Blockquote.Content>{quote}</Blockquote.Content>
			{attribution ? <Blockquote.Caption>{attribution}</Blockquote.Caption> : null}
		</Blockquote.Root>
	);
}
