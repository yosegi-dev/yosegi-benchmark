import { Chip } from "@mantine/core";

export interface PersonChipProps {
	label: string;
	/** Whether the chip is on. */
	selected?: boolean;
	/** Fired with the state the chip is moving to. */
	onToggle?: (selected: boolean) => void;
	size?: "xs" | "sm" | "md";
	color?: string;
}

export function PersonChip({ label, selected = false, onToggle, size = "sm", color = "blue" }: PersonChipProps) {
	return (
		<Chip checked={selected} size={size} color={color} radius="xl" variant="light" onChange={onToggle}>
			{label}
		</Chip>
	);
}
