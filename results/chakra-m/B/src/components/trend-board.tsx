import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface TrendBoardProps {
	/** Board title. */
	title: string;
	/** How many columns the tiles are laid out in. */
	columns?: number;
	/** The tiles to lay out. */
	children: ReactNode;
}

export function TrendBoard({ title, columns = 2, children }: TrendBoardProps) {
	return (
		<Card.Root size="md" variant="outline">
			<Card.Header pb="2">
				<Heading size="md">{title}</Heading>
			</Card.Header>
			<Card.Body pt="0">
				<SimpleGrid columns={columns} gap="3">
					{children}
				</SimpleGrid>
			</Card.Body>
		</Card.Root>
	);
}
