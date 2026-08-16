import { Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface SuggestedUserRowProps {
	/** The account being suggested. */
	author: AuthorModel;
	/** Slot for the account's avatar. */
	avatar: ReactNode;
	/** Slot for the follow control. */
	follow: ReactNode;
	/** Why the account is being suggested, e.g. "Followed by @rin". */
	reason?: string;
}

export function SuggestedUserRow({ author, avatar, follow, reason }: SuggestedUserRowProps) {
	return (
		<Group gap="sm" wrap="nowrap" justify="space-between">
			<Group gap="sm" wrap="nowrap" miw={0}>
				{avatar}
				<Stack gap={0} miw={0}>
					<Text size="sm" fw={600} truncate>
						{author.displayName}
					</Text>
					<Text size="xs" c="dimmed" truncate>
						@{author.handle}
					</Text>
					{reason === undefined ? null : (
						<Text size="xs" c="dimmed" truncate>
							{reason}
						</Text>
					)}
				</Stack>
			</Group>
			{follow}
		</Group>
	);
}
