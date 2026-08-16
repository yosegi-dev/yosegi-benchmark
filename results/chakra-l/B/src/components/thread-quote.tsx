import { Blockquote } from "@chakra-ui/react";

export interface ThreadQuoteProps {
	/** The quoted thread text. */
	quote: string;
	/** Who said it; rendered as the caption. */
	attribution?: string;
	/** Accent draws the coloured bar; neutral leaves it grey. */
	tone?: "neutral" | "accent";
}

export function ThreadQuote({ quote, attribution, tone = "neutral" }: ThreadQuoteProps) {
	return (
		<Blockquote.Root variant="subtle" colorPalette={tone === "accent" ? "purple" : "gray"}>
			<Blockquote.Content>{quote}</Blockquote.Content>
			{attribution ? <Blockquote.Caption>{attribution}</Blockquote.Caption> : null}
		</Blockquote.Root>
	);
}
