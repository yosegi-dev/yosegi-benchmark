import { Chip } from "@mantine/core";

export interface TopicChipProps {
	label: string;
	/** Whether the chip is on. */
	selected?: boolean;
	/** Fired with the state the chip is moving to. */
	onToggle?: (selected: boolean) => void;
	size?: "xs" | "sm" | "md";
	color?: string;
}

export function TopicChip({ label, selected = false, onToggle, size = "sm", color = "blue" }: TopicChipProps) {
	return (
		<Chip checked={selected} size={size} color={color} radius="xl" variant="light" onChange={onToggle}>
			{label}
		</Chip>
	);
}
