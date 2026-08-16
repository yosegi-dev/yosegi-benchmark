import { Card, Heading, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { Density } from "~/models";

const panelSize = {
	compact: "sm",
	cozy: "md",
	roomy: "lg",
} as const;

const rowGap = {
	compact: "1",
	cozy: "3",
	roomy: "4",
} as const;

export interface SuggestedUserPanelProps {
	/** Panel title, e.g. "Who to follow". */
	heading: string;
	/** Slot for the suggested user rows. */
	rows: ReactNode;
	/** Controls the panel padding and the gap between rows. */
	density?: Density;
}

export function SuggestedUserPanel({ heading, rows, density = "cozy" }: SuggestedUserPanelProps) {
	return (
		<Card.Root size={panelSize[density]} variant="subtle" as="section" mt="4">
			<Card.Header pb="2">
				<Heading size="md">{heading}</Heading>
			</Card.Header>
			<Card.Body pt="0">
				<Stack gap={rowGap[density]}>{rows}</Stack>
			</Card.Body>
		</Card.Root>
	);
}
