import { Progress } from "@chakra-ui/react";
import type { ReactNode } from "react";

const tonePalette = {
	neutral: "gray",
	positive: "green",
	warning: "orange",
	critical: "red",
} as const;

export interface TourMeterProps {
	/** Name of the tour measure. */
	label: string;
	/** Current value, between 0 and `max`. */
	value: number;
	/** Upper bound of the track. */
	max?: number;
	/** Picks the colour of the filled range. */
	tone?: "neutral" | "positive" | "warning" | "critical";
	/** Rendered under the track. */
	caption?: ReactNode;
}

export function TourMeter({ label, value, max = 100, tone = "neutral", caption }: TourMeterProps) {
	return (
		<Progress.Root value={value} max={max} size="sm" colorPalette={tonePalette[tone]}>
			<Progress.Label>{label}</Progress.Label>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
			{caption}
		</Progress.Root>
	);
}
