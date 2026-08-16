import { Chip } from "@mantine/core";

export interface MediaChipProps {
	label: string;
	/** Whether the chip is on. */
	selected?: boolean;
	/** Fired with the state the chip is moving to. */
	onToggle?: (selected: boolean) => void;
	size?: "xs" | "sm" | "md";
	color?: string;
}

export function MediaChip({ label, selected = false, onToggle, size = "sm", color = "blue" }: MediaChipProps) {
	return (
		<Chip checked={selected} size={size} color={color} radius="xl" variant="light" onChange={onToggle}>
			{label}
		</Chip>
	);
}
