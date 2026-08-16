import { Avatar, AvatarGroup } from "@chakra-ui/react";

export interface AvatarStackProps {
	/** Absolute image URLs, in stacking order. */
	srcs: string[];
	/** Controls the avatar size. */
	size?: "xs" | "sm" | "md";
	/** Maximum avatars rendered; the remainder is dropped silently. */
	limit?: number;
}

export function AvatarStack({ srcs, size = "xs", limit = 5 }: AvatarStackProps) {
	return (
		<AvatarGroup size={size} stacking="first-on-top" gap="0">
			{srcs.slice(0, limit).map((src) => (
				<Avatar.Root key={src} variant="subtle" colorPalette="gray">
					<Avatar.Fallback />
					<Avatar.Image src={src} alt="" />
				</Avatar.Root>
			))}
		</AvatarGroup>
	);
}
