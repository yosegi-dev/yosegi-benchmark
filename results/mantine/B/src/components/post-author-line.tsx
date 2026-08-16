import { Badge, Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
import { visibilityLabel } from "~/tokens";

export interface PostAuthorLineProps {
	/** Who wrote the post. */
	author: AuthorModel;
	/** Relative time since the post, already formatted, e.g. "2h". */
	label: string;
	/** Slot for the author's avatar. */
	avatar: ReactNode;
	/** When set, a small badge naming the audience is shown. */
	visibility?: Visibility;
}

export function PostAuthorLine({ author, label, avatar, visibility }: PostAuthorLineProps) {
	return (
		<Group gap="sm" wrap="nowrap" align="center">
			{avatar}
			<Stack gap={2} miw={0} flex={1}>
				<Group gap={6} wrap="nowrap" align="center">
					<Text size="sm" fw={600} truncate>
						{author.displayName}
					</Text>
					{author.verified === true ? (
						<Badge size="xs" variant="light" color="blue" radius="sm">
							Verified
						</Badge>
					) : null}
					<Text size="sm" c="dimmed" truncate>
						@{author.handle}
					</Text>
					<Text size="sm" c="dimmed">
						·
					</Text>
					<Text size="sm" c="dimmed" style={{ whiteSpace: "nowrap" }}>
						{label}
					</Text>
				</Group>
				{visibility === undefined ? null : (
					<Badge size="xs" variant="default" radius="sm" w="fit-content">
						{visibilityLabel[visibility]}
					</Badge>
				)}
			</Stack>
		</Group>
	);
}
