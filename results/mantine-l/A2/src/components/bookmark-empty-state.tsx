import { Center, Stack, Text, ThemeIcon } from "@mantine/core";
import type { ReactNode } from "react";

const TONE_COLOR: Record<"neutral" | "info" | "warning", string> = {
	neutral: "gray",
	info: "blue",
	warning: "yellow",
};

export interface BookmarkEmptyStateProps {
	/** Headline explaining what is missing. */
	title: string;
	/** Sentence under the headline. */
	description?: string;
	/** Slot for the recovery action. */
	action?: ReactNode;
	/** Colour of the icon disc. */
	tone?: "neutral" | "info" | "warning";
}

export function BookmarkEmptyState({ title, description = "", action, tone = "neutral" }: BookmarkEmptyStateProps) {
	return (
		<Center py="xl">
			<Stack align="center" gap="xs" maw={360}>
				<ThemeIcon size={48} radius="xl" variant="light" color={TONE_COLOR[tone]}>
					<Text size="lg">·</Text>
				</ThemeIcon>
				<Text fw={600}>{title}</Text>
				{description === "" ? null : (
					<Text size="sm" c="dimmed" ta="center">
						{description}
					</Text>
				)}
				{action}
			</Stack>
		</Center>
	);
}
