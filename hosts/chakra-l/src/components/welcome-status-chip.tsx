import { Status } from "@chakra-ui/react";

const statePalette = {
	online: "green",
	idle: "yellow",
	offline: "gray",
	error: "red",
} as const;

export interface WelcomeStatusChipProps {
	/** Current welcome state; picks the dot colour. */
	state: "online" | "idle" | "offline" | "error";
	/** Text shown after the dot. */
	label: string;
	/** Controls the dot and text size. */
	size?: "sm" | "md" | "lg";
}

export function WelcomeStatusChip({ state, label, size = "md" }: WelcomeStatusChipProps) {
	return (
		<Status.Root size={size} colorPalette={statePalette[state]}>
			<Status.Indicator />
			{label}
		</Status.Root>
	);
}
