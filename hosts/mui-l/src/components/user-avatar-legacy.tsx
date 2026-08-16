import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

export interface UserAvatarLegacyProps {
	/** Image URL. The old profile endpoint returned a string, not a user object. */
	src: string;
	/** Used for the alt text and the fallback initial. */
	name: string;
	/** Edge length in px. */
	size?: number;
	/** Draws the verification badge. */
	isVerified?: boolean;
	/** Draws a green presence dot. */
	isOnline?: boolean;
}

export function UserAvatarLegacy({ src, name, size = 40, isVerified = false, isOnline = false }: UserAvatarLegacyProps) {
	const avatar = (
		<Avatar src={src} alt={name} sx={{ width: size, height: size, fontSize: size / 2.5 }}>
			{name.charAt(0)}
		</Avatar>
	);

	if (isVerified) {
		return (
			<Badge
				overlap="circular"
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				badgeContent={<VerifiedIcon color="primary" sx={{ fontSize: size / 2.5 }} />}
			>
				{avatar}
			</Badge>
		);
	}

	if (isOnline) {
		return (
			<Badge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} color="success" variant="dot">
				{avatar}
			</Badge>
		);
	}

	return avatar;
}
