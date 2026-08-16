import { Group, Indicator, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface MentionRowEntry {
	id: string;
	label: string;
	/** Second line, usually a handle or a path. */
	detail?: string;
}

export interface MentionRowProps {
	entry: MentionRowEntry;
	/** Read state of the entry. */
	state: "read" | "unread" | "muted";
	/** Slot for the control on the right. */
	action?: ReactNode;
	/** Shown at the far right, e.g. a relative time. */
	timestamp?: string;
	onOpen?: () => void;
}

export function MentionRow({ entry, state, action, timestamp = "", onOpen }: MentionRowProps) {
	return (
		<Group
			gap="sm"
			wrap="nowrap"
			py="xs"
			opacity={state === "muted" ? 0.6 : 1}
			onClick={onOpen}
			style={{ cursor: onOpen ? "pointer" : "default" }}
		>
			<Indicator size={8} color="blue" disabled={state !== "unread"} position="middle-start" offset={-6}>
				<Stack gap={2} miw={0}>
					<Text size="sm" fw={state === "unread" ? 600 : 400} truncate>
						{entry.label}
					</Text>
					{entry.detail === undefined ? null : (
						<Text size="xs" c="dimmed" truncate>
							{entry.detail}
						</Text>
					)}
				</Stack>
			</Indicator>
			<Group gap="xs" wrap="nowrap" ml="auto">
				{timestamp === "" ? null : (
					<Text size="xs" c="dimmed">
						{timestamp}
					</Text>
				)}
				{action}
			</Group>
		</Group>
	);
}
