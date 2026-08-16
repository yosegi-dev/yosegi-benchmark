import { densityControl } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";
import { Button } from "~/ui/button";

export interface FollowButtonProps {
	/** Whether the viewer already follows this account. */
	following: boolean;
	/** Called with the state the button is moving to, not the current one. */
	onFollowToggle: (following: boolean) => void;
	/** Spacing scale, which here selects the control height. */
	density?: Density;
}

export function FollowButton({
	following,
	onFollowToggle,
	density = "cozy",
}: FollowButtonProps) {
	return (
		<Button
			variant={following ? "outline" : "default"}
			className={cn("rounded-full px-4", densityControl[density])}
			aria-pressed={following}
			onClick={() => onFollowToggle(!following)}
		>
			{following ? "Following" : "Follow"}
		</Button>
	);
}
