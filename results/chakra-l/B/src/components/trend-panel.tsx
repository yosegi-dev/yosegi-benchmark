import { Card, Heading, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { Density } from "~/models";

const panelSize = {
	compact: "sm",
	cozy: "md",
	roomy: "lg",
} as const;

const rowGap = {
	compact: "0",
	cozy: "1",
	roomy: "2",
} as const;

export interface TrendPanelProps {
	/** Panel title, e.g. "Trends for you". */
	heading: string;
	/** Slot for the trend rows. */
	items: ReactNode;
	/** Controls the panel padding and the gap between rows. */
	density?: Density;
}

export function TrendPanel({ heading, items, density = "cozy" }: TrendPanelProps) {
	return (
		<Card.Root size={panelSize[density]} variant="subtle" as="section">
			<Card.Header pb="2">
				<Heading size="md">{heading}</Heading>
			</Card.Header>
			<Card.Body pt="0">
				<Stack gap={rowGap[density]}>{items}</Stack>
			</Card.Body>
		</Card.Root>
	);
}
