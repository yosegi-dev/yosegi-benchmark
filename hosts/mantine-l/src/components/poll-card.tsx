import { Card, Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface PollCardItem {
	id: string;
	title: string;
	description?: string;
	/** Shown in the corner when set. */
	count?: number;
}

export interface PollCardProps {
	item: PollCardItem;
	/** Surface weight of the card. */
	variant?: "plain" | "outlined" | "elevated";
	/** Slot rendered along the bottom edge. */
	footer?: ReactNode;
	onOpen?: () => void;
}

export function PollCard({ item, variant = "outlined", footer, onOpen }: PollCardProps) {
	return (
		<Card
			withBorder={variant !== "plain"}
			shadow={variant === "elevated" ? "sm" : "none"}
			radius="md"
			padding="md"
			onClick={onOpen}
			style={{ cursor: onOpen ? "pointer" : "default" }}
		>
			<Stack gap="xs">
				<Group justify="space-between" gap="xs" wrap="nowrap">
					<Text fw={600} size="sm" truncate>
						{item.title}
					</Text>
					{item.count === undefined ? null : (
						<Text size="xs" c="dimmed">
							{item.count}
						</Text>
					)}
				</Group>
				{item.description === undefined ? null : (
					<Text size="sm" c="dimmed" lineClamp={3}>
						{item.description}
					</Text>
				)}
				{footer}
			</Stack>
		</Card>
	);
}
