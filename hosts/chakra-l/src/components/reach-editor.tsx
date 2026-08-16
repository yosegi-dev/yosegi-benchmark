import { HStack, Stack, Text, Textarea } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ReachEditorProps {
	/** Name of the reach field. */
	label: string;
	/** Current text; the textarea is fully controlled. */
	value: string;
	/** Caps the input and drives the counter. */
	maxLength?: number;
	/** Rendered in the footer, opposite the counter. */
	footer?: ReactNode;
	/** Fired with the next text on every keystroke. */
	onValueChange: (value: string) => void;
}

export function ReachEditor({ label, value, maxLength = 280, footer, onValueChange }: ReachEditorProps) {
	return (
		<Stack gap="2">
			<Text fontWeight="medium">{label}</Text>
			<Textarea
				value={value}
				maxLength={maxLength}
				size="sm"
				autoresize
				rows={3}
				onChange={(event) => onValueChange(event.currentTarget.value)}
			/>
			<HStack justify="space-between">
				{footer}
				<Text fontSize="xs" color="fg.muted" ms="auto">
					{value.length} / {maxLength}
				</Text>
			</HStack>
		</Stack>
	);
}
