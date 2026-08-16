import { Avatar, Badge, HStack, Stack, Text, chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";

const audienceLabel: Record<Visibility, string> = {
	public: "Everyone",
	followers: "Followers",
	circle: "Circle",
	unlisted: "Unlisted",
};

export interface PayoutAudienceRowProps {
	/** The account this payout row is about. */
	author: AuthorModel;
	/** Who can see this account's activity here. */
	visibility: Visibility;
	/** Rendered at the end of the row. */
	meta?: ReactNode;
	/** Fired with the account's id when the row is activated. */
	onSelect?: (id: string) => void;
}

export function PayoutAudienceRow({ author, visibility, meta, onSelect }: PayoutAudienceRowProps) {
	return (
		<chakra.button
			type="button"
			width="full"
			textAlign="start"
			px="2"
			py="2"
			borderRadius="l2"
			cursor="pointer"
			_hover={{ bg: "bg.emphasized" }}
			onClick={() => onSelect?.(author.id)}
		>
			<HStack gap="3">
				<Avatar.Root size="sm" variant="subtle" colorPalette="gray">
					<Avatar.Fallback name={author.displayName} />
					<Avatar.Image src={author.avatarUrl} alt={author.displayName} />
				</Avatar.Root>
				<Stack gap="0" flex="1" minW="0">
					<Text fontSize="sm" fontWeight="semibold" truncate>
						{author.displayName}
					</Text>
					<Text fontSize="sm" color="fg.muted" truncate>
						@{author.handle}
					</Text>
				</Stack>
				<Badge size="xs" variant="subtle">
					{audienceLabel[visibility]}
				</Badge>
				{meta}
			</HStack>
		</chakra.button>
	);
}
