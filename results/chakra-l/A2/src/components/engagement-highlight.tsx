import { Badge, Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { TrendModel } from "~/models";

export interface EngagementHighlightProps {
	/** The trend this engagement highlight is built from. */
	trend: TrendModel;
	/** Position in the surrounding list; drawn as a leading badge. */
	rank?: number;
	/** Rendered at the end of the row. */
	action?: ReactNode;
	/** Draws the category as a second badge. */
	showCategory?: boolean;
}

export function EngagementHighlight({ trend, rank, action, showCategory = true }: EngagementHighlightProps) {
	return (
		<Card.Root size="sm" variant="outline" colorPalette="blue">
			<Card.Body>
				<HStack gap="3" align="start">
					{rank === undefined ? null : (
						<Badge size="sm" variant="solid">
							{rank}
						</Badge>
					)}
					<Stack gap="0.5" flex="1" minW="0">
						<Text fontWeight="semibold" truncate>
							{trend.label}
						</Text>
						<Text fontSize="xs" color="fg.muted">
							{trend.postCount.toLocaleString("en-US")} posts
						</Text>
						{showCategory && trend.category ? (
							<Badge size="xs" variant="subtle" alignSelf="start">
								{trend.category}
							</Badge>
						) : null}
					</Stack>
					{action}
				</HStack>
			</Card.Body>
		</Card.Root>
	);
}
