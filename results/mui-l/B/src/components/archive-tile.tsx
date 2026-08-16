import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface ArchiveTileProps {
	/** Caption under the value. */
	label: string;
	/** The value, already formatted. */
	value: string;
	/** Glyph drawn at the leading edge. */
	icon?: ReactNode;
	/** Surface treatment of the tile. */
	variant?: "plain" | "filled" | "outlined";
	/** Stretches the tile to fill its grid cell. */
	fullHeight?: boolean;
}

export function ArchiveTile({ label, value, icon, variant = "outlined", fullHeight = false }: ArchiveTileProps) {
	return (
		<Paper
			variant={variant === "outlined" ? "outlined" : "elevation"}
			elevation={variant === "filled" ? 1 : 0}
			sx={{
				borderRadius: 3,
				p: 2,
				height: fullHeight ? "100%" : "auto",
				bgcolor: variant === "filled" ? "action.hover" : "background.paper",
			}}
		>
			<Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
				{icon ? <Box sx={{ color: "primary.main", display: "flex" }}>{icon}</Box> : null}
				<Box sx={{ minWidth: 0 }}>
					<Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }} noWrap>
						{value}
					</Typography>
					<Typography variant="caption" color="text.secondary" noWrap component="p">
						{label}
					</Typography>
				</Box>
			</Stack>
		</Paper>
	);
}
