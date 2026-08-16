import { Button, Group, Paper, Stack, Text, Textarea } from "@mantine/core";
import type { ReactNode } from "react";

export interface ReplyComposerProps {
	/** Handle of the account being replied to, without the "@". */
	replyingTo: string;
	/** Current reply text. */
	text: string;
	onTextChange: (text: string) => void;
	onSend: () => void;
	/** Extra controls placed left of the send button. */
	children?: ReactNode;
}

export function ReplyComposer({
	replyingTo,
	text,
	onTextChange,
	onSend,
	children,
}: ReplyComposerProps) {
	return (
		<Paper withBorder radius="md" p="sm">
			<Stack gap="xs">
				<Text size="xs" c="dimmed">
					Replying to @{replyingTo}
				</Text>
				<Textarea
					value={text}
					variant="unstyled"
					autosize
					minRows={1}
					maxRows={6}
					placeholder="Post your reply"
					onChange={(event) => onTextChange(event.currentTarget.value)}
				/>
				<Group justify="space-between" gap="xs">
					{children}
					<Button size="xs" radius="xl" ml="auto" disabled={text.trim().length === 0} onClick={onSend}>
						Reply
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
}
