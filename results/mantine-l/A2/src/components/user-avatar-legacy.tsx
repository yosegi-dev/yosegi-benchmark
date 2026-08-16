import { Avatar, Indicator, UnstyledButton } from "@mantine/core";

export interface UserAvatarLegacyProps {
	src: string;
	alt: string;
	/** Diameter in px. */
	size?: number;
	/** Draws the blue check dot. */
	isVerified?: boolean;
	onClick?: () => void;
}

export function UserAvatarLegacy({
	src,
	alt,
	size = 40,
	isVerified = false,
	onClick,
}: UserAvatarLegacyProps) {
	return (
		<UnstyledButton onClick={onClick} aria-label={alt}>
			<Indicator size={10} color="blue" offset={5} position="bottom-end" withBorder disabled={!isVerified}>
				<Avatar src={src} alt={alt} size={size} radius="xl" />
			</Indicator>
		</UnstyledButton>
	);
}
