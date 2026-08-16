import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import type { AuthorModel } from "~/models";

export interface UserAvatarGroupProps {
	/** Everyone in the group, in display order. */
	authors: AuthorModel[];
	/** Avatars shown before the overflow counter appears. */
	max?: number;
	/** Overall scale of each avatar. */
	size?: "sm" | "md" | "lg";
	/** Total the counter should report, when it is larger than `authors`. */
	total?: number;
}

const AVATAR_PX = { sm: 24, md: 32, lg: 40 };

export function UserAvatarGroup({ authors, max = 4, size = "md", total }: UserAvatarGroupProps) {
	const px = AVATAR_PX[size];
	return (
		<AvatarGroup max={max} total={total} spacing="small" sx={{ justifyContent: "flex-end" }}>
			{authors.map((author) => (
				<Tooltip key={author.id} title={author.displayName}>
					<Avatar
						src={author.avatarUrl}
						alt={author.displayName}
						sx={{ width: px, height: px, fontSize: px / 2.5 }}
					>
						{author.displayName.charAt(0)}
					</Avatar>
				</Tooltip>
			))}
		</AvatarGroup>
	);
}
