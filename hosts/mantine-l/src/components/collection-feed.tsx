import { Card, Group, Skeleton, Stack, Text, UnstyledButton } from "@mantine/core";
import type { PostModel } from "~/models";

export interface CollectionFeedProps {
	posts: PostModel[];
	/** Replaces the list with placeholders. */
	loading?: boolean;
	/** Text shown when there is nothing to list. */
	emptyLabel?: string;
	onPostSelect?: (id: string) => void;
}

export function CollectionFeed({ posts, loading = false, emptyLabel = "No posts yet", onPostSelect }: CollectionFeedProps) {
	if (loading) {
		return (
			<Stack gap="sm">
				{[0, 1, 2].map((index) => (
					<Skeleton key={index} height={72} radius="md" />
				))}
			</Stack>
		);
	}

	if (posts.length === 0) {
		return (
			<Text size="sm" c="dimmed" ta="center" py="md">
				{emptyLabel}
			</Text>
		);
	}

	return (
		<Stack gap="sm">
			{posts.map((post) => (
				<Card key={post.id} withBorder radius="md" padding="sm">
					<UnstyledButton w="100%" onClick={() => onPostSelect?.(post.id)}>
						<Group gap={6} wrap="nowrap">
							<Text size="xs" fw={600}>
								{post.author.displayName}
							</Text>
							<Text size="xs" c="dimmed" truncate>
								@{post.author.handle}
							</Text>
						</Group>
						<Text size="sm" lineClamp={2}>
							{post.body}
						</Text>
					</UnstyledButton>
				</Card>
			))}
		</Stack>
	);
}
