import { Avatar, Button, Card, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import type { AuthorModel } from "~/models";

const panelSize = {
	sm: "sm",
	md: "md",
} as const;

export interface SuggestedUserPanelLegacyProps {
	/** Panel title. */
	title: string;
	/** The accounts to suggest; the panel renders the rows and follow buttons itself. */
	users: AuthorModel[];
	/** Controls the panel padding. */
	size?: "sm" | "md";
	/** Fired with the id of the account whose follow button was activated. */
	onFollow?: (id: string) => void;
}

export function SuggestedUserPanelLegacy({
	title,
	users,
	size = "md",
	onFollow,
}: SuggestedUserPanelLegacyProps) {
	return (
		<Card.Root size={panelSize[size]} variant="outline">
			<Card.Header pb="2">
				<Heading size="sm">{title}</Heading>
			</Card.Header>
			<Card.Body pt="0">
				<Stack gap="3">
					{users.map((user) => (
						<HStack key={user.id} gap="3">
							<Avatar.Root size="sm" variant="subtle" colorPalette="gray">
								<Avatar.Fallback name={user.displayName} />
								<Avatar.Image src={user.avatarUrl} alt={user.displayName} />
							</Avatar.Root>
							<Stack gap="0" flex="1" minW="0">
								<Text fontSize="sm" fontWeight="semibold" truncate>
									{user.displayName}
								</Text>
								<Text fontSize="sm" color="fg.muted" truncate>
									@{user.handle}
								</Text>
							</Stack>
							<Button size="xs" variant="solid" borderRadius="full" onClick={() => onFollow?.(user.id)}>
								Follow
							</Button>
						</HStack>
					))}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
