import { Card, SimpleGrid, Title } from "@mantine/core";
import type { ReactNode } from "react";

export interface TrendBoardProps {
	/** Board title. */
	title: string;
	/** Number of columns the tiles are laid out in. */
	columns?: number;
	/** The tiles. */
	children: ReactNode;
}

export function TrendBoard({ title, columns = 2, children }: TrendBoardProps) {
	return (
		<Card withBorder radius="md" padding="md">
			<Title order={4} mb="sm">
				{title}
			</Title>
			<SimpleGrid cols={columns} spacing="sm">
				{children}
			</SimpleGrid>
		</Card>
	);
}
