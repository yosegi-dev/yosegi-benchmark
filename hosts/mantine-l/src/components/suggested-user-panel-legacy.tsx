import { Avatar, Button, Card, Group, Stack, Text } from "@mantine/core";

export interface SuggestedUserPanelLegacyProps {
	/** Panel title. */
	title: string;
	/** Accounts to suggest. */
	users: { name: string; handle: string; avatar: string }[];
	/** Fired with the handle of the account whose follow button was clicked. */
	onFollow: (handle: string) => void;
}

export function SuggestedUserPanelLegacy({
	title,
	users,
	onFollow,
}: SuggestedUserPanelLegacyProps) {
	return (
		<Card withBorder radius="md" padding="md">
			<Text fw={700} mb="sm">
				{title}
			</Text>
			<Stack gap="sm">
				{users.map((user) => (
					<Group key={user.handle} justify="space-between" wrap="nowrap" gap="sm">
						<Group gap="sm" wrap="nowrap" miw={0}>
							<Avatar src={user.avatar} alt={user.name} size={32} radius="xl" />
							<Stack gap={0} miw={0}>
								<Text size="sm" fw={600} truncate>
									{user.name}
								</Text>
								<Text size="xs" c="dimmed" truncate>
									@{user.handle}
								</Text>
							</Stack>
						</Group>
						<Button size="xs" radius="xl" onClick={() => onFollow(user.handle)}>
							Follow
						</Button>
					</Group>
				))}
			</Stack>
		</Card>
	);
}
