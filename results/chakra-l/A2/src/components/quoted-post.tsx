import { Card, HStack, Span, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { PostModel } from "~/models";

export interface QuotedPostProps {
	/** The post being quoted; rendered read-only, without its action bar. */
	post: PostModel;
	/** Slot for the quoted author's avatar. */
	avatar: ReactNode;
}

export function QuotedPost({ post, avatar }: QuotedPostProps) {
	return (
		<Card.Root size="sm" variant="outline" bg="bg.muted" borderRadius="l2">
			<Card.Body>
				<Stack gap="2">
					<HStack gap="2" minW="0">
						{avatar}
						<Text fontWeight="medium" fontSize="sm" truncate>
							{post.author.displayName}
						</Text>
						<Text color="fg.muted" fontSize="sm" truncate>
							@{post.author.handle}
						</Text>
						<Span color="fg.muted" fontSize="sm" aria-hidden="true">
							·
						</Span>
						<Text color="fg.muted" fontSize="sm" whiteSpace="nowrap">
							{post.createdAt}
						</Text>
					</HStack>
					<Text fontSize="sm" whiteSpace="pre-wrap" wordBreak="break-word" lineClamp="4">
						{post.body}
					</Text>
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
