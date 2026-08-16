import { Box, Button, HStack, Stack, Text, Textarea } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ReplyComposerProps {
	/** Handle of the account being replied to, without the leading "@". */
	replyingTo: string;
	/** The reply text; the textarea is fully controlled. */
	value: string;
	/** Fired with the next reply text on every keystroke. */
	onChange: (value: string) => void;
	/** Fired when the reply button is activated. */
	onSubmit: () => void;
	/** Rendered in the footer, before the reply button. */
	children?: ReactNode;
}

export function ReplyComposer({ replyingTo, value, onChange, onSubmit, children }: ReplyComposerProps) {
	return (
		<Box bg="bg" borderWidth="1px" borderRadius="l3" px="4" py="3">
			<Stack gap="2">
				<Text fontSize="sm" color="fg.muted">
					Replying to <Text as="span" color="blue.fg">@{replyingTo}</Text>
				</Text>
				<Textarea
					value={value}
					placeholder="Post your reply"
					variant="flushed"
					size="md"
					autoresize
					rows={2}
					onChange={(event) => onChange(event.currentTarget.value)}
				/>
				<HStack justify="space-between">
					{children}
					<Button
						size="sm"
						variant="solid"
						colorPalette="blue"
						borderRadius="full"
						ms="auto"
						disabled={value.trim().length === 0}
						onClick={onSubmit}
					>
						Reply
					</Button>
				</HStack>
			</Stack>
		</Box>
	);
}
