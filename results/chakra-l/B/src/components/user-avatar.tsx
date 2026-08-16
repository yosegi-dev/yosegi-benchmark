import { Avatar } from "@chakra-ui/react";
import type { AuthorModel, Density } from "~/models";

const avatarSize = {
	compact: "xs",
	cozy: "sm",
	roomy: "md",
} as const;

export interface UserAvatarProps {
	/** The author to portray; the image and the initials fallback both come from it. */
	author: AuthorModel;
	/** Controls the avatar size. */
	density?: Density;
}

export function UserAvatar({ author, density = "cozy" }: UserAvatarProps) {
	return (
		<Avatar.Root size={avatarSize[density]} variant="subtle" colorPalette="gray">
			<Avatar.Fallback name={author.displayName} />
			<Avatar.Image src={author.avatarUrl} alt={author.displayName} />
		</Avatar.Root>
	);
}
