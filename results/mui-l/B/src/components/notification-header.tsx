import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface NotificationHeaderProps {
	/** Headline of the surface. */
	title: string;
	/** Small label drawn after the title. */
	badge?: string;
	/** Copy under the title. */
	description?: ReactNode;
	/** Text alignment of the block. */
	align?: "start" | "center";
	/** Controls drawn at the trailing edge. */
	actions?: ReactNode;
}

export function NotificationHeader({ title, badge, description, align = "start", actions }: NotificationHeaderProps) {
	return (
		<Stack
			direction="row"
			spacing={2}
			sx={{ alignItems: "center", justifyContent: align === "center" ? "center" : "space-between", py: 1.5 }}
		>
			<Box sx={{ minWidth: 0, textAlign: align === "center" ? "center" : "left" }}>
				<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
					<Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					{badge ? <Chip label={badge} size="small" color="primary" variant="outlined" /> : null}
				</Stack>
				{description ? (
					<Typography variant="body2" color="text.secondary" component="div">
						{description}
					</Typography>
				) : null}
			</Box>
			{actions}
		</Stack>
	);
}
