import { Avatar, Box, Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface CommunityHeaderProps {
	title: string;
	/** Line under the title. */
	subtitle?: string;
	/** Image shown to the left of the title. */
	avatarUrl?: string;
	/** Slot for controls on the right. */
	actions?: ReactNode;
	/** Pins the header while its section scrolls. */
	sticky?: boolean;
}

export function CommunityHeader({ title, subtitle = "", avatarUrl = "", actions, sticky = false }: CommunityHeaderProps) {
	return (
		<Box
			px="md"
			py="sm"
			pos={sticky ? "sticky" : "static"}
			top={0}
			bg="var(--mantine-color-body)"
			style={{ zIndex: 40 }}
		>
			<Group justify="space-between" gap="sm" wrap="nowrap">
				<Group gap="sm" wrap="nowrap" miw={0}>
					{avatarUrl === "" ? null : <Avatar src={avatarUrl} alt={title} size={36} radius="xl" />}
					<Stack gap={0} miw={0}>
						<Text fw={700} truncate>
							{title}
						</Text>
						{subtitle === "" ? null : (
							<Text size="xs" c="dimmed" truncate>
								{subtitle}
							</Text>
						)}
					</Stack>
				</Group>
				{actions}
			</Group>
		</Box>
	);
}
