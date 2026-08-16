import { Card, SimpleGrid, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface SuggestedUserGridProps {
	/** Optional title above the grid. */
	heading?: string;
	/** The cards. */
	children: ReactNode;
	columns?: 2 | 3;
}

export function SuggestedUserGrid({ heading = "", children, columns = 2 }: SuggestedUserGridProps) {
	return (
		<Card withBorder radius="md" padding="md">
			{heading === "" ? null : (
				<Text fw={700} mb="sm">
					{heading}
				</Text>
			)}
			<SimpleGrid cols={columns} spacing="sm">
				{children}
			</SimpleGrid>
		</Card>
	);
}
