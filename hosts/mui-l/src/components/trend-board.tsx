import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";

export interface TrendBoardProps {
	/** Board title; a node so callers can add a filter control beside it. */
	heading: ReactNode;
	/** The tiles to lay out. */
	children: ReactNode;
	/** Tiles per row. */
	columns?: 2 | 3 | 4;
	/** Drawn at the bottom edge, e.g. a "see all" link. */
	footer?: ReactNode;
}

export function TrendBoard({ heading, children, columns = 2, footer }: TrendBoardProps) {
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
			<Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
				{heading}
			</Stack>
			<Box sx={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 1.5 }}>
				{children}
			</Box>
			{footer ? <Box sx={{ mt: 1.5 }}>{footer}</Box> : null}
		</Paper>
	);
}
