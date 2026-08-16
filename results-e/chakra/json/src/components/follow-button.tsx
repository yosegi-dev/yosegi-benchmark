import { Button } from "@chakra-ui/react";
import type { Density } from "~/models";

const buttonSize = {
	compact: "xs",
	cozy: "sm",
	roomy: "md",
} as const;

export interface FollowButtonProps {
	/** Whether the viewer already follows this account. */
	following: boolean;
	/** Fired with the state the button is moving to, not the current one. */
	onFollowToggle: (following: boolean) => void;
	/** Controls the button height. */
	density?: Density;
}

export function FollowButton({ following, onFollowToggle, density = "cozy" }: FollowButtonProps) {
	return (
		<Button
			size={buttonSize[density]}
			variant={following ? "outline" : "solid"}
			colorPalette="gray"
			borderRadius="full"
			aria-pressed={following}
			onClick={() => onFollowToggle(!following)}
		>
			{following ? "Following" : "Follow"}
		</Button>
	);
}
