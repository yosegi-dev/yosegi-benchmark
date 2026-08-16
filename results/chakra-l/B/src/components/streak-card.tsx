import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface StreakCardProps {
	/** Title of the streak card. */
	heading: string;
	/** One line under the title. */
	subheading?: string;
	/** The card's rows. */
	items: ReactNode;
	/** Rendered at the bottom of the card. */
	footer?: ReactNode;
	/** Accent tints the card; plain leaves it neutral. */
	tone?: "plain" | "accent";
}

export function StreakCard({ heading, subheading, items, footer, tone = "plain" }: StreakCardProps) {
	return (
		<Card.Root
			size="md"
			variant={tone === "accent" ? "subtle" : "outline"}
			colorPalette={tone === "accent" ? "gray" : "gray"}
		>
			<Card.Header pb="2">
				<Heading size="sm">{heading}</Heading>
				{subheading ? (
					<Text fontSize="sm" color="fg.muted">
						{subheading}
					</Text>
				) : null}
			</Card.Header>
			<Card.Body pt="0">
				<Stack gap="2">{items}</Stack>
			</Card.Body>
			{footer ? <Card.Footer>{footer}</Card.Footer> : null}
		</Card.Root>
	);
}
