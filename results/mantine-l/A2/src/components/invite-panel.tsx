import { LoadingOverlay, Paper, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface InvitePanelProps {
	title: string;
	/** The panel contents. */
	children: ReactNode;
	/** Slot along the bottom edge. */
	footer?: ReactNode;
	/** Covers the panel while its data is in flight. */
	loading?: boolean;
}

export function InvitePanel({ title, children, footer, loading = false }: InvitePanelProps) {
	return (
		<Paper withBorder radius="md" p="md" pos="relative">
			<LoadingOverlay visible={loading} zIndex={20} />
			<Stack gap="sm">
				<Text size="sm" fw={700} tt="uppercase" c="dimmed">
					{title}
				</Text>
				{children}
				{footer}
			</Stack>
		</Paper>
	);
}
