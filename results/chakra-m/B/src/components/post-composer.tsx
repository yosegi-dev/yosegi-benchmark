import { Avatar, Box, Button, Flex, HStack, Separator, Stack, Textarea } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";

const visibilityHint: Record<Visibility, string> = {
	public: "Everyone can reply",
	followers: "Followers can reply",
	circle: "Your circle can reply",
	unlisted: "Unlisted — link only",
};

export interface PostComposerProps {
	/** The signed-in user, shown beside the draft. */
	viewer: AuthorModel;
	/** The draft text; the textarea is fully controlled. */
	draft: string;
	/** The audience the draft will be posted to. */
	visibility: Visibility;
	/** Slot for the visibility picker. */
	visibilityPicker: ReactNode;
	/** Fired with the next draft text on every keystroke. */
	onDraftChange: (draft: string) => void;
	/** Fired when the submit button is activated. */
	onSubmitPress: () => void;
	/** Label of the submit button. */
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
		<Box bg="bg" borderWidth="1px" borderRadius="l3" px="4" py="4">
			<Flex gap="3" align="start">
				<Avatar.Root size="sm" variant="subtle" colorPalette="gray">
					<Avatar.Fallback name={viewer.displayName} />
					<Avatar.Image src={viewer.avatarUrl} alt={viewer.displayName} />
				</Avatar.Root>
				<Stack gap="3" flex="1" minW="0">
					<Textarea
						value={draft}
						placeholder="What's happening?"
						variant="flushed"
						size="lg"
						autoresize
						rows={2}
						onChange={(event) => onDraftChange(event.currentTarget.value)}
					/>
					<Separator />
					<HStack justify="space-between" gap="3">
						<HStack gap="2" minW="0" color="fg.muted" fontSize="sm">
							{visibilityPicker}
							<Box hideBelow="sm">{visibilityHint[visibility]}</Box>
						</HStack>
						<Button
							size="sm"
							variant="solid"
							colorPalette="blue"
							borderRadius="full"
							disabled={draft.trim().length === 0}
							onClick={onSubmitPress}
						>
							{submitLabel}
						</Button>
					</HStack>
				</Stack>
			</Flex>
		</Box>
	);
}
