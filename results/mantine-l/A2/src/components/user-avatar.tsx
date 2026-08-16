import { Avatar, Indicator } from "@mantine/core";
import type { AuthorModel, Density } from "~/models";
import { avatarSize } from "~/tokens";

export interface UserAvatarProps {
	/** The whole author; the image, alt text and initials all come from it. */
	author: AuthorModel;
	/** Drives the avatar diameter. */
	density?: Density;
}

export function UserAvatar({ author, density = "cozy" }: UserAvatarProps) {
	return (
		<Indicator
			size={10}
			color="blue"
			offset={5}
			position="bottom-end"
			withBorder
			disabled={author.verified !== true}
			title="Verified"
		>
			<Avatar
				src={author.avatarUrl}
				alt={author.displayName}
				name={author.displayName}
				size={avatarSize[density]}
				radius="xl"
			/>
		</Indicator>
	);
}
