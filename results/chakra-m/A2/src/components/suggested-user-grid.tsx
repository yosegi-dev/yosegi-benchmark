import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface SuggestedUserGridProps {
	/** Section title rendered above the grid. */
	heading: string;
	/** How many cards sit in a row. */
	columns?: number;
	/** The account cards to lay out. */
	children: ReactNode;
}

export function SuggestedUserGrid({ heading, columns = 3, children }: SuggestedUserGridProps) {
	return (
		<Stack gap="3">
			<Heading size="sm">{heading}</Heading>
			<SimpleGrid columns={columns} gap="3">
				{children}
			</SimpleGrid>
		</Stack>
	);
}
