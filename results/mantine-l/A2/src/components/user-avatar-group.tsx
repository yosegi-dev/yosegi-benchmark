import { Avatar, Tooltip } from "@mantine/core";

export interface UserAvatarGroupProps {
	/** Accounts to show, in display order. */
	users: { name: string; src: string }[];
	/** How many avatars to show before collapsing the rest into a "+n" chip. */
	limit?: number;
	size?: "xs" | "sm" | "md" | "lg";
}

export function UserAvatarGroup({ users, limit = 3, size = "sm" }: UserAvatarGroupProps) {
	const shown = users.slice(0, limit);
	const overflow = users.length - shown.length;

	return (
		<Avatar.Group spacing="sm">
			{shown.map((user) => (
				<Tooltip key={user.src} label={user.name} withArrow>
					<Avatar src={user.src} alt={user.name} name={user.name} size={size} radius="xl" />
				</Tooltip>
			))}
			{overflow > 0 ? (
				<Avatar size={size} radius="xl">
					+{overflow}
				</Avatar>
			) : null}
		</Avatar.Group>
	);
}
