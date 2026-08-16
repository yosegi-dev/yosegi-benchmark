import { HStack, RatingGroup } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface GuideRatingProps {
	/** How many stars are filled. */
	value: number;
	/** How many stars are drawn in total. */
	count?: number;
	/** Rendered after the stars — the guide sample size, usually. */
	caption?: ReactNode;
	/** Fired with the star the reader picked; omit to render a read-only display. */
	onRatingChange?: (value: number) => void;
}

export function GuideRating({ value, count = 5, caption, onRatingChange }: GuideRatingProps) {
	return (
		<HStack gap="2">
			<RatingGroup.Root
				count={count}
				value={value}
				size="sm"
				colorPalette="gray"
				readOnly={onRatingChange === undefined}
				onValueChange={(details) => onRatingChange?.(details.value)}
			>
				<RatingGroup.HiddenInput />
				<RatingGroup.Control>
					<RatingGroup.Items />
				</RatingGroup.Control>
			</RatingGroup.Root>
			{caption}
		</HStack>
	);
}
