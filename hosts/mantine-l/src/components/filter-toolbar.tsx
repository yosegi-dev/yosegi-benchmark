import { Box, Group } from "@mantine/core";
import type { ReactNode } from "react";

export interface FilterToolbarProps {
	/** Slot aligned to the start of the bar. */
	left?: ReactNode;
	/** Slot aligned to the end of the bar. */
	right?: ReactNode;
	/** Pins the bar to the top of its scroll container. */
	sticky?: boolean;
	/** Draws the bottom rule. */
	bordered?: boolean;
}

export function FilterToolbar({ left, right, sticky = false, bordered = true }: FilterToolbarProps) {
	return (
		<Box
			px="sm"
			py="xs"
			pos={sticky ? "sticky" : "static"}
			top={0}
			bg="var(--mantine-color-body)"
			style={{
				zIndex: 50,
				borderBottom: bordered ? "1px solid var(--mantine-color-default-border)" : "none",
			}}
		>
			<Group justify="space-between" gap="sm" wrap="nowrap">
				<Group gap="xs" wrap="nowrap">
					{left}
				</Group>
				<Group gap="xs" wrap="nowrap">
					{right}
				</Group>
			</Group>
		</Box>
	);
}
