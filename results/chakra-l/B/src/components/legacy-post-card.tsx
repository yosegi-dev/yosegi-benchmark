import { Avatar, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import type { AuthorModel } from "~/models";

export interface LegacyPostCardProps {
	/** The post's author. */
	author: AuthorModel;
	/** The post text. */
	body: string;
	/** Already-formatted timestamp, e.g. "2h". */
	createdAt: string;
	/** Reply count shown on the first action. */
	replies: number;
	/** Repost count shown on the second action. */
	reposts: number;
	/** Like count shown on the third action. */
	likes: number;
	/** Whether the viewer has liked this post. */
	liked: boolean;
	/** Flat drops the shadow; raised keeps it. */
	variant?: "flat" | "raised";
	/** Fired when the card itself is activated. */
	onClick?: () => void;
}

export function LegacyPostCard({
	author,
	body,
	createdAt,
	replies,
	reposts,
	likes,
	liked,
	variant = "flat",
	onClick,
}: LegacyPostCardProps) {
	return (
		<Box
			bg="bg"
			borderWidth="1px"
			borderRadius="l2"
			boxShadow={variant === "raised" ? "md" : "none"}
			px="4"
			py="3"
			onClick={onClick}
		>
			<Stack gap="2">
				<HStack gap="2" minW="0">
					<Avatar.Root size="xs" variant="subtle" colorPalette="gray">
						<Avatar.Fallback name={author.displayName} />
						<Avatar.Image src={author.avatarUrl} alt={author.displayName} />
					</Avatar.Root>
					<Text fontWeight="semibold" fontSize="sm" truncate>
						{author.displayName}
					</Text>
					<Text color="fg.muted" fontSize="sm" truncate>
						@{author.handle}
					</Text>
					<Text color="fg.muted" fontSize="sm" whiteSpace="nowrap">
						{createdAt}
					</Text>
				</HStack>
				<Text fontSize="sm" whiteSpace="pre-wrap" wordBreak="break-word">
					{body}
				</Text>
				<HStack gap="1" color="fg.muted">
					<Button size="xs" variant="ghost">
						{replies}
					</Button>
					<Button size="xs" variant="ghost">
						{reposts}
					</Button>
					<Button size="xs" variant={liked ? "subtle" : "ghost"} colorPalette="pink">
						{likes}
					</Button>
				</HStack>
			</Stack>
		</Box>
	);
}
