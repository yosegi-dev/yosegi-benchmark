import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface SuggestedUserGridProps {
	/** Grid title. */
	heading: string;
	/** The cards to lay out. */
	children: ReactNode;
	/** Cards per row. */
	columns?: number;
	/** Removes the surrounding paper so the grid can sit inside another panel. */
	flush?: boolean;
}

export function SuggestedUserGrid({ heading, children, columns = 2, flush = false }: SuggestedUserGridProps) {
	const grid = (
		<Box sx={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 1.5 }}>
			{children}
		</Box>
	);

	if (flush) {
		return grid;
	}

	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
			<Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
				{heading}
			</Typography>
			{grid}
		</Paper>
	);
}
