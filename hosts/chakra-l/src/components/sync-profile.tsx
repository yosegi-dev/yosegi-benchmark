import { Avatar, Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface SyncProfileProps {
	/** The account this sync block describes. */
	author: AuthorModel;
	/** The account's own description. */
	bio?: string;
	/** Absolute URL of the header image drawn above the avatar. */
	bannerUrl?: string;
	/** Rendered under the bio — follower counts, joined date, and the like. */
	stats?: ReactNode;
}

export function SyncProfile({ author, bio, bannerUrl, stats }: SyncProfileProps) {
	return (
		<Card.Root size="md" variant="outline" overflow="hidden">
			{bannerUrl ? <Box height="24" bgImage={"url(" + bannerUrl + ")"} bgSize="cover" /> : null}
			<Card.Body>
				<Stack gap="3">
					<HStack gap="3">
						<Avatar.Root size="lg" variant="subtle" colorPalette="gray">
							<Avatar.Fallback name={author.displayName} />
							<Avatar.Image src={author.avatarUrl} alt={author.displayName} />
						</Avatar.Root>
						<Stack gap="0" minW="0">
							<Text fontWeight="semibold" truncate>
								{author.displayName}
							</Text>
							<Text color="fg.muted" fontSize="sm" truncate>
								@{author.handle}
							</Text>
						</Stack>
					</HStack>
					{bio ? <Text fontSize="sm">{bio}</Text> : null}
					{stats}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
