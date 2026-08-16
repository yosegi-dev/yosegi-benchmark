import { Button, Group, Paper, Stack, Text } from "@mantine/core";

export interface BlockPromptProps {
	title: string;
	/** Sentence explaining the consequence. */
	description?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	/** Colours the confirm button red. */
	destructive?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export function BlockPrompt({
	title,
	description = "",
	confirmLabel = "Confirm",
	cancelLabel = "Cancel",
	destructive = false,
	onConfirm,
	onCancel,
}: BlockPromptProps) {
	return (
		<Paper withBorder radius="md" p="md">
			<Stack gap="sm">
				<Text fw={600}>{title}</Text>
				{description === "" ? null : (
					<Text size="sm" c="dimmed">
						{description}
					</Text>
				)}
				<Group justify="flex-end" gap="xs">
					<Button variant="default" size="xs" onClick={onCancel}>
						{cancelLabel}
					</Button>
					<Button color={destructive ? "red" : "blue"} size="xs" onClick={onConfirm}>
						{confirmLabel}
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
}
