import { Avatar, Badge, Card, Group, Stack, Text } from "@mantine/core";

export interface LegacyPostCardProps {
	authorName: string;
	authorHandle: string;
	avatarSrc: string;
	/** The post text. */
	text: string;
	/** Preformatted time string, e.g. "2h". */
	time: string;
	likes: number;
	reposts: number;
	replies: number;
	/** Highlights the like count. */
	liked?: boolean;
	onClick?: () => void;
}

export function LegacyPostCard({
	authorName,
	authorHandle,
	avatarSrc,
	text,
	time,
	likes,
	reposts,
	replies,
	liked = false,
	onClick,
}: LegacyPostCardProps) {
	return (
		<Card withBorder radius="md" padding="md" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
			<Group gap="sm" wrap="nowrap" align="flex-start">
				<Avatar src={avatarSrc} alt={authorName} size={40} radius="xl" />
				<Stack gap={6} flex={1} miw={0}>
					<Group gap={6} wrap="nowrap">
						<Text size="sm" fw={600}>
							{authorName}
						</Text>
						<Text size="sm" c="dimmed">
							@{authorHandle} · {time}
						</Text>
					</Group>
					<Text size="sm">{text}</Text>
					<Group gap="lg">
						<Text size="xs" c="dimmed">
							{replies} replies
						</Text>
						<Text size="xs" c="dimmed">
							{reposts} reposts
						</Text>
						<Badge size="xs" variant={liked ? "filled" : "light"} color={liked ? "pink" : "gray"}>
							{likes} likes
						</Badge>
					</Group>
				</Stack>
			</Group>
		</Card>
	);
}
