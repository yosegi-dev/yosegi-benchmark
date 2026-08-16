import { Avatar, Float, Circle } from "@chakra-ui/react";

const legacySize = {
	small: "xs",
	medium: "sm",
	large: "md",
} as const;

export interface UserAvatarLegacyProps {
	/** Absolute URL of the avatar image. */
	src: string;
	/** Used for the alt text and for the initials fallback. */
	name: string;
	/** Named sizes kept from the pre-token design system. */
	size?: "small" | "medium" | "large";
	/** Draws a green presence dot at the bottom-right. */
	showBadge?: boolean;
}

export function UserAvatarLegacy({ src, name, size = "medium", showBadge = false }: UserAvatarLegacyProps) {
	return (
		<Avatar.Root size={legacySize[size]} variant="subtle" colorPalette="gray">
			<Avatar.Fallback name={name} />
			<Avatar.Image src={src} alt={name} />
			{showBadge ? (
				<Float placement="bottom-end" offsetX="1" offsetY="1">
					<Circle size="3" bg="green.solid" borderWidth="2px" borderColor="bg" />
				</Float>
			) : null}
		</Avatar.Root>
	);
}
