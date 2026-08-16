import { Avatar, Card, Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface PostCardCompactProps {
	/** Who wrote the post. */
	author: AuthorModel;
	/** The post text. */
	body: string;
	/** Preformatted time string shown after the handle. */
	timestamp: string;
	/** Row height preset. */
	size?: "sm" | "md";
	/** Rendered under the body, typically a row of controls. */
	children?: ReactNode;
}

export function PostCardCompact({
	author,
	body,
	timestamp,
	size = "sm",
	children,
}: PostCardCompactProps) {
	return (
		<Card withBorder radius="sm" padding={size === "sm" ? "xs" : "sm"}>
			<Group gap="xs" wrap="nowrap" align="flex-start">
				<Avatar src={author.avatarUrl} alt={author.displayName} size={size === "sm" ? 24 : 32} radius="xl" />
				<Stack gap={2} miw={0} flex={1}>
					<Group gap={4} wrap="nowrap">
						<Text size="xs" fw={600} truncate>
							{author.displayName}
						</Text>
						<Text size="xs" c="dimmed" truncate>
							@{author.handle}
						</Text>
						<Text size="xs" c="dimmed">
							{timestamp}
						</Text>
					</Group>
					<Text size={size === "sm" ? "xs" : "sm"} lineClamp={2}>
						{body}
					</Text>
					{children}
				</Stack>
			</Group>
		</Card>
	);
}
