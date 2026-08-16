import { Badge, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import type { ReactNode } from "react";

export interface NotificationRowProps {
	/** Primary line of the row. */
	title: string;
	/** Secondary line, shown under the title. */
	subtitle?: string;
	/** Right-aligned metadata, e.g. a timestamp. */
	meta?: string;
	/** Slot at the start of the row. */
	leading?: ReactNode;
	/** Slot at the end of the row. */
	trailing?: ReactNode;
	/** Emphasises the row and shows the unread marker. */
	unread?: boolean;
	onSelect?: () => void;
}

export function NotificationRow({
	title,
	subtitle = "",
	meta = "",
	leading,
	trailing,
	unread = false,
	onSelect,
}: NotificationRowProps) {
	return (
		<UnstyledButton w="100%" onClick={onSelect}>
			<Group gap="sm" wrap="nowrap" align="flex-start" py="xs">
				{leading}
				<Stack gap={2} flex={1} miw={0}>
					<Group gap={6} wrap="nowrap">
						<Text size="sm" fw={unread ? 700 : 500} truncate>
							{title}
						</Text>
						{unread ? (
							<Badge size="xs" variant="filled" color="blue">
								New
							</Badge>
						) : null}
					</Group>
					{subtitle === "" ? null : (
						<Text size="xs" c="dimmed" truncate>
							{subtitle}
						</Text>
					)}
				</Stack>
				{meta === "" ? null : (
					<Text size="xs" c="dimmed">
						{meta}
					</Text>
				)}
				{trailing}
			</Group>
		</UnstyledButton>
	);
}
