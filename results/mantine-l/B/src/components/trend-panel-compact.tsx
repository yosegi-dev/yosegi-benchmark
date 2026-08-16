import { Group, Paper, Stack, Text } from "@mantine/core";

export interface TrendPanelCompactProps {
	/** Panel title. */
	title: string;
	/** Rows to show, already ordered by rank. */
	trends: { label: string; count: number }[];
	size?: "sm" | "md";
}

export function TrendPanelCompact({ title, trends, size = "sm" }: TrendPanelCompactProps) {
	return (
		<Paper withBorder radius="sm" p={size === "sm" ? "xs" : "sm"}>
			<Text size="xs" fw={700} tt="uppercase" c="dimmed" mb="xs">
				{title}
			</Text>
			<Stack gap={6}>
				{trends.map((trend) => (
					<Group key={trend.label} justify="space-between" gap="xs" wrap="nowrap">
						<Text size={size} truncate>
							{trend.label}
						</Text>
						<Text size="xs" c="dimmed">
							{trend.count}
						</Text>
					</Group>
				))}
			</Stack>
		</Paper>
	);
}
