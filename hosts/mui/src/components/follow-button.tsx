import Button from "@mui/material/Button";
import { controlSize } from "~/internal/tokens";
import type { Density } from "~/models";

export interface FollowButtonProps {
	/** True when the viewer already follows the account. */
	following: boolean;
	/** Called with the state the button is moving to, not the current one. */
	onFollowToggle: (following: boolean) => void;
	/** Drives the button height. */
	density?: Density;
}

export function FollowButton({ following, onFollowToggle, density = "cozy" }: FollowButtonProps) {
	return (
		<Button
			variant={following ? "outlined" : "contained"}
			color={following ? "inherit" : "primary"}
			size={controlSize(density)}
			aria-pressed={following}
			onClick={() => onFollowToggle(!following)}
			sx={{ borderRadius: 999, textTransform: "none", fontWeight: 700, minWidth: 92 }}
		>
			{following ? "Following" : "Follow"}
		</Button>
	);
}
