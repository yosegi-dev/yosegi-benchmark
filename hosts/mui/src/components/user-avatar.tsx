import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import VerifiedIcon from "@mui/icons-material/Verified";
import { avatarPx } from "~/internal/tokens";
import type { AuthorModel, Density } from "~/models";

export interface UserAvatarProps {
	/** The author the avatar stands for; the image and the alt text both come from it. */
	author: AuthorModel;
	/** Drives the avatar's edge length. */
	density?: Density;
}

export function UserAvatar({ author, density = "cozy" }: UserAvatarProps) {
	const size = avatarPx(density);
	const avatar = (
		<Avatar
			src={author.avatarUrl}
			alt={author.displayName}
			sx={{ width: size, height: size, fontSize: size / 2.5 }}
		>
			{author.displayName.charAt(0)}
		</Avatar>
	);

	if (!author.verified) {
		return avatar;
	}

	return (
		<Badge
			overlap="circular"
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			badgeContent={
				<VerifiedIcon
					color="primary"
					sx={{ fontSize: size / 2.5, bgcolor: "background.paper", borderRadius: "50%" }}
				/>
			}
		>
			{avatar}
		</Badge>
	);
}
