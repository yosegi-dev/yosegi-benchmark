import { Avatar, Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface TimelineHeaderProps {
	/** The signed-in user, shown on the left. */
	viewer: AuthorModel;
	/** Slot for the search control. */
	search: ReactNode;
	/** Slot for the notification control. */
	notifications: ReactNode;
	/** Fired when the viewer block is activated. */
	onViewerPress?: () => void;
}

export function TimelineHeader({
	viewer,
	search,
	notifications,
	onViewerPress,
}: TimelineHeaderProps) {
	return (
		<Box
			component="header"
			bg="var(--mantine-color-body)"
			px="md"
			py="sm"
			style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
		>
			<Group justify="space-between" wrap="nowrap" gap="md">
				<UnstyledButton onClick={onViewerPress}>
					<Group gap="xs" wrap="nowrap">
						<Avatar src={viewer.avatarUrl} alt={viewer.displayName} name={viewer.displayName} size={36} radius="xl" />
						<Stack gap={0} visibleFrom="sm">
							<Text size="sm" fw={600} lh={1.2}>
								{viewer.displayName}
							</Text>
							<Text size="xs" c="dimmed" lh={1.2}>
								@{viewer.handle}
							</Text>
						</Stack>
					</Group>
				</UnstyledButton>
				<Box flex={1} maw={480}>
					{search}
				</Box>
				{notifications}
			</Group>
		</Box>
	);
}
