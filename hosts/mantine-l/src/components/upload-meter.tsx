import { Group, Progress, Stack, Text } from "@mantine/core";

export interface UploadMeterProps {
	label: string;
	value: number;
	/** Value that counts as full. */
	max?: number;
	/** Shows the percentage to the right of the label. */
	showValue?: boolean;
	color?: string;
}

export function UploadMeter({ label, value, max = 100, showValue = true, color = "blue" }: UploadMeterProps) {
	const percent = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

	return (
		<Stack gap={4}>
			<Group justify="space-between" gap="xs">
				<Text size="xs" c="dimmed">
					{label}
				</Text>
				{showValue ? (
					<Text size="xs" c="dimmed">
						{percent}%
					</Text>
				) : null}
			</Group>
			<Progress value={percent} color={color} radius="xl" size="sm" />
		</Stack>
	);
}
