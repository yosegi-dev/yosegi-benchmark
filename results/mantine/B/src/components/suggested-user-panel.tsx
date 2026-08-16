import { Card, Divider, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { Density } from "~/models";
import { gap, pad } from "~/tokens";

export interface SuggestedUserPanelProps {
	/** Panel title, e.g. "Who to follow". */
	heading: string;
	/** Slot for the rows of the panel. */
	rows: ReactNode;
	/** Drives the panel padding and row spacing. */
	density?: Density;
}

export function SuggestedUserPanel({ heading, rows, density = "cozy" }: SuggestedUserPanelProps) {
	return (
		<Card component="section" withBorder radius="md" padding={pad[density]}>
			<Text fw={700} size="md" mb="xs">
				{heading}
			</Text>
			<Divider mb={gap[density]} />
			<Stack gap={gap[density]}>{rows}</Stack>
		</Card>
	);
}
