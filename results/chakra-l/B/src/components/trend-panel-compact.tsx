import { Card, Heading, Stack, Text, chakra } from "@chakra-ui/react";
import type { TrendModel } from "~/models";

const panelSize = {
	sm: "sm",
	md: "md",
} as const;

export interface TrendPanelCompactProps {
	/** Panel title. */
	title: string;
	/** The trends to list; the panel renders the rows itself. */
	trends: TrendModel[];
	/** Controls the panel padding. */
	size?: "sm" | "md";
	/** Fired with the id of the trend that was activated. */
	onTrendSelect?: (id: string) => void;
}

export function TrendPanelCompact({
	title,
	trends,
	size = "sm",
	onTrendSelect,
}: TrendPanelCompactProps) {
	return (
		<Card.Root size={panelSize[size]} variant="subtle">
			<Card.Header pb="1">
				<Heading size="sm">{title}</Heading>
			</Card.Header>
			<Card.Body pt="0">
				<Stack gap="0">
					{trends.map((trend) => (
						<chakra.button
							key={trend.id}
							type="button"
							textAlign="start"
							px="1"
							py="1.5"
							borderRadius="l1"
							cursor="pointer"
							_hover={{ bg: "bg.emphasized" }}
							onClick={() => onTrendSelect?.(trend.id)}
						>
							<Text fontSize="sm" fontWeight="medium" truncate>
								{trend.label}
							</Text>
							<Text fontSize="xs" color="fg.muted">
								{trend.postCount.toLocaleString("en-US")} posts
							</Text>
						</chakra.button>
					))}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
