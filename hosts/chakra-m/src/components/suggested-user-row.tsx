import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface SuggestedUserRowProps {
	/** The account being suggested. */
	author: AuthorModel;
	/** Slot for the account's avatar. */
	avatar: ReactNode;
	/** Slot for the follow button. */
	follow: ReactNode;
	/** Why the account is being suggested, e.g. "Followed by rin". */
	reason?: string;
}

export function SuggestedUserRow({ author, avatar, follow, reason }: SuggestedUserRowProps) {
	return (
		<HStack gap="3" align="center">
			{avatar}
			<Stack gap="0" flex="1" minW="0">
				<Text fontWeight="semibold" fontSize="sm" truncate>
					{author.displayName}
				</Text>
				<Text color="fg.muted" fontSize="sm" truncate>
					@{author.handle}
				</Text>
				{reason ? (
					<Text color="fg.muted" fontSize="xs" truncate>
						{reason}
					</Text>
				) : null}
			</Stack>
			<Box flexShrink="0">{follow}</Box>
		</HStack>
	);
}
