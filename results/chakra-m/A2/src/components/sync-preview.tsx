import { Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { PostModel } from "~/models";

export interface SyncPreviewProps {
	/** The post this sync preview stands for. */
	post: PostModel;
	/** Draws the reply, repost and like counts under the body. */
	showCounts?: boolean;
	/** Rendered under the counts. */
	footer?: ReactNode;
	/** Caps the body at this many lines. */
	clampLines?: number;
}

export function SyncPreview({ post, showCounts = true, footer, clampLines = 3 }: SyncPreviewProps) {
	return (
		<Card.Root size="sm" variant="subtle">
			<Card.Body>
				<Stack gap="2">
					<Text fontSize="sm" fontWeight="medium" truncate>
						{post.author.displayName}
					</Text>
					<Text fontSize="sm" lineClamp={clampLines}>
						{post.body}
					</Text>
					{showCounts ? (
						<HStack gap="4" fontSize="xs" color="fg.muted">
							<Text>{post.replyCount} replies</Text>
							<Text>{post.repostCount} reposts</Text>
							<Text>{post.likeCount} likes</Text>
						</HStack>
					) : null}
					{footer}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
