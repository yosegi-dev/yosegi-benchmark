import { Avatar, AvatarGroup } from "@chakra-ui/react";
import type { AuthorModel } from "~/models";

export interface UserAvatarGroupProps {
	/** The accounts to stack, in display order. */
	users: AuthorModel[];
	/** How many avatars to show before collapsing the rest into a "+n" chip. */
	max?: number;
	/** Controls the avatar size. */
	size?: "xs" | "sm" | "md" | "lg";
}

export function UserAvatarGroup({ users, max = 3, size = "sm" }: UserAvatarGroupProps) {
	const shown = users.slice(0, max);
	const overflow = users.length - shown.length;
	return (
		<AvatarGroup size={size} stacking="last-on-top">
			{shown.map((user) => (
				<Avatar.Root key={user.id} variant="subtle" colorPalette="gray">
					<Avatar.Fallback name={user.displayName} />
					<Avatar.Image src={user.avatarUrl} alt={user.displayName} />
				</Avatar.Root>
			))}
			{overflow > 0 ? (
				<Avatar.Root variant="solid" colorPalette="gray">
					<Avatar.Fallback>+{overflow}</Avatar.Fallback>
				</Avatar.Root>
			) : null}
		</AvatarGroup>
	);
}
