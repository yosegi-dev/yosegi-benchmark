import { Modal } from "@mantine/core";
import type { ReactNode } from "react";

export interface ComposeSheetProps {
	/** Title shown in the sheet header. */
	title: string;
	/** Whether the sheet is on screen. */
	opened: boolean;
	/** Slot for the sheet contents. */
	content: ReactNode;
	onDismiss: () => void;
	size?: "sm" | "md" | "lg";
}

export function ComposeSheet({ title, opened, content, onDismiss, size = "md" }: ComposeSheetProps) {
	return (
		<Modal opened={opened} title={title} size={size} radius="md" centered onClose={onDismiss}>
			{content}
		</Modal>
	);
}
