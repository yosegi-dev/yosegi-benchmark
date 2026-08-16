import { Group, Stack, Text, UnstyledButton } from "@mantine/core";
import type { TrendModel } from "~/models";
import { formatCount } from "~/tokens";

export interface TrendItemProps {
	/** The trend to show. */
	trend: TrendModel;
	/** Position in the list, rendered as "1", "2", … */
	rank: number;
	/** Fired when the row is activated. */
	onTrendPress?: () => void;
}

export function TrendItem({ trend, rank, onTrendPress }: TrendItemProps) {
	return (
		<UnstyledButton onClick={onTrendPress}>
			<Group gap="sm" wrap="nowrap" align="flex-start">
				<Text size="sm" c="dimmed" fw={600} w={16}>
					{rank}
				</Text>
				<Stack gap={2} miw={0}>
					{trend.category === undefined ? null : (
						<Text size="xs" c="dimmed">
							{trend.category}
						</Text>
					)}
					<Text size="sm" fw={600} truncate>
						{trend.label}
					</Text>
					<Text size="xs" c="dimmed">
						{formatCount(trend.postCount)} posts
					</Text>
				</Stack>
			</Group>
		</UnstyledButton>
	);
}
