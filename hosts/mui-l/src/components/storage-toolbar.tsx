import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface StorageToolbarProps {
	/** Name of the surface the toolbar belongs to. */
	label: string;
	/** Controls at the leading edge. */
	leading?: ReactNode;
	/** Controls at the trailing edge. */
	trailing?: ReactNode;
	/** Tightens the height. */
	dense?: boolean;
	/** Pins the toolbar to the top of its scroll container. */
	sticky?: boolean;
}

export function StorageToolbar({ label, leading, trailing, dense = false, sticky = false }: StorageToolbarProps) {
	return (
		<Paper
			variant="outlined"
			square
			sx={{
				px: 1.5,
				py: dense ? 0.5 : 1,
				position: sticky ? "sticky" : "static",
				top: 0,
				zIndex: 2,
				borderRadius: 0,
			}}
		>
			<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
				{leading}
				<Typography variant="subtitle2" sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>
					{label}
				</Typography>
				<Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
				<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>{trailing}</Box>
			</Stack>
		</Paper>
	);
}
