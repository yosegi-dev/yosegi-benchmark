import { Group, NumberFormatter, Paper, Stack, Text } from "@mantine/core";

export interface RepostStatProps {
	/** What the number counts. */
	label: string;
	value: number;
	/** Change against the previous period, in percent. */
	delta?: number;
	/** Whether to group thousands with separators. */
	grouped?: boolean;
}

export function RepostStat({ label, value, delta, grouped = true }: RepostStatProps) {
	return (
		<Paper withBorder radius="md" p="sm">
			<Stack gap={2}>
				<Text size="xs" c="dimmed" tt="uppercase">
					{label}
				</Text>
				<Group gap="xs" align="baseline">
					<Text fz="xl" fw={700}>
						<NumberFormatter value={value} thousandSeparator={grouped} />
					</Text>
					{delta === undefined ? null : (
						<Text size="xs" c={delta >= 0 ? "teal" : "red"}>
							{delta >= 0 ? "+" : ""}
							{delta}%
						</Text>
					)}
				</Group>
			</Stack>
		</Paper>
	);
}
