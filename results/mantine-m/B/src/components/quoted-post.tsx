import { Card, Group, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { PostModel } from "~/models";

export interface QuotedPostProps {
	/** The post being quoted. */
	post: PostModel;
	/** Slot for the quoted author's avatar. */
	avatar: ReactNode;
}

export function QuotedPost({ post, avatar }: QuotedPostProps) {
	return (
		<Card withBorder radius="md" padding="sm" bg="var(--mantine-color-default-hover)">
			<Group gap="xs" wrap="nowrap" mb={6}>
				{avatar}
				<Text size="xs" fw={600} truncate>
					{post.author.displayName}
				</Text>
				<Text size="xs" c="dimmed" truncate>
					@{post.author.handle}
				</Text>
			</Group>
			<Text size="sm" lineClamp={3}>
				{post.body}
			</Text>
		</Card>
	);
}
