import { Blockquote } from "@chakra-ui/react";

export interface TranscriptQuoteProps {
	/** The quoted transcript text. */
	quote: string;
	/** Who said it; rendered as the caption. */
	attribution?: string;
	/** Accent draws the coloured bar; neutral leaves it grey. */
	tone?: "neutral" | "accent";
}

export function TranscriptQuote({ quote, attribution, tone = "neutral" }: TranscriptQuoteProps) {
	return (
		<Blockquote.Root variant="subtle" colorPalette={tone === "accent" ? "orange" : "gray"}>
			<Blockquote.Content>{quote}</Blockquote.Content>
			{attribution ? <Blockquote.Caption>{attribution}</Blockquote.Caption> : null}
		</Blockquote.Root>
	);
}
