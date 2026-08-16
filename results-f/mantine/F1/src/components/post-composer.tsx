import { Avatar, Button, Card, Divider, Group, Stack, Textarea } from "@mantine/core";
import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
import { visibilityLabel } from "~/tokens";

export interface PostComposerProps {
	/** The signed-in user, whose avatar sits beside the field. */
	viewer: AuthorModel;
	/** Current text of the post being written. */
	draft: string;
	/** Audience the draft will be posted to. */
	visibility: Visibility;
	/** Slot for the control that changes the audience. */
	visibilityPicker: ReactNode;
	/** Fired on every keystroke with the next draft text. */
	onDraftChange: (draft: string) => void;
	/** Fired when the submit button is activated. */
	onSubmitPress: () => void;
	/** Text of the submit button. */
	submitLabel?: string;
}

export function PostComposer({
	viewer,
	draft,
	visibility,
	visibilityPicker,
	onDraftChange,
	onSubmitPress,
	submitLabel = "Post",
}: PostComposerProps) {
	return (
		<Card withBorder radius="md" padding="md">
			<Group align="flex-start" wrap="nowrap" gap="sm">
				<Avatar src={viewer.avatarUrl} alt={viewer.displayName} name={viewer.displayName} size={40} radius="xl" />
				<Stack flex={1} miw={0} gap="sm">
					<Textarea
						value={draft}
						placeholder="What's happening?"
						variant="unstyled"
						autosize
						minRows={2}
						maxRows={10}
						aria-label={`New post, visible to ${visibilityLabel[visibility].toLowerCase()}`}
						onChange={(event) => onDraftChange(event.currentTarget.value)}
					/>
					<Divider />
					<Group justify="space-between" wrap="nowrap" gap="sm">
						{visibilityPicker}
						<Button radius="xl" disabled={draft.trim().length === 0} onClick={onSubmitPress}>
							{submitLabel}
						</Button>
					</Group>
				</Stack>
			</Group>
		</Card>
	);
}
