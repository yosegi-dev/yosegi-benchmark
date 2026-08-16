import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { padUnits } from "~/internal/tokens";
import type { Density } from "~/models";

export interface TrendPanelProps {
	/** Title shown at the top of the panel, e.g. "Trending now". */
	heading: string;
	/** Slot for the panel rows, normally `TrendItem`s. */
	items: ReactNode;
	/** Drives the panel padding. */
	density?: Density;
}

export function TrendPanel({ heading, items, density = "cozy" }: TrendPanelProps) {
	const pad = padUnits(density);
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			<Typography variant="h6" component="h2" sx={{ px: pad, pt: pad, pb: 1, fontWeight: 700 }}>
				{heading}
			</Typography>
			<Divider />
			<Stack divider={<Divider flexItem />}>{items}</Stack>
		</Paper>
	);
}
