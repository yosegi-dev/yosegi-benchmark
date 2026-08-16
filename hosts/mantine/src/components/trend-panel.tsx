import { Card, Divider, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { Density } from "~/models";
import { gap, pad } from "~/tokens";

export interface TrendPanelProps {
	/** Panel title, e.g. "Trending now". */
	heading: string;
	/** Slot for the rows of the panel. */
	items: ReactNode;
	/** Drives the panel padding and row spacing. */
	density?: Density;
}

export function TrendPanel({ heading, items, density = "cozy" }: TrendPanelProps) {
	return (
		<Card component="section" withBorder radius="md" padding={pad[density]}>
			<Text fw={700} size="md" mb="xs">
				{heading}
			</Text>
			<Divider mb={gap[density]} />
			<Stack gap={gap[density]}>{items}</Stack>
		</Card>
	);
}
