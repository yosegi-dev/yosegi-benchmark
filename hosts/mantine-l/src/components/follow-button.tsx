import { Button } from "@mantine/core";
import type { Density } from "~/models";
import { controlSize } from "~/tokens";

export interface FollowButtonProps {
	/** Whether the viewer already follows the account. */
	following: boolean;
	/** Fired with the state the button is moving to, not the current one. */
	onFollowToggle: (following: boolean) => void;
	/** Control size. */
	density?: Density;
}

export function FollowButton({ following, onFollowToggle, density = "cozy" }: FollowButtonProps) {
	return (
		<Button
			variant={following ? "default" : "filled"}
			size={controlSize[density]}
			radius="xl"
			aria-pressed={following}
			onClick={() => onFollowToggle(!following)}
		>
			{following ? "Following" : "Follow"}
		</Button>
	);
}
