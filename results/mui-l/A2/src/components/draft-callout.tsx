import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface DraftCalloutProps {
	/** Headline. */
	title: string;
	/** Copy under the headline. */
	body: string;
	/** Colour the callout is drawn in. */
	tone?: "info" | "tip" | "warning";
	/** Removes the padding for use inside a dense list. */
	compact?: boolean;
}

const TONES = { info: "info.main", tip: "success.main", warning: "warning.main" };

export function DraftCallout({ title, body, tone = "info", compact = false }: DraftCalloutProps) {
	return (
		<Paper
			variant="outlined"
			sx={{ borderRadius: 2, p: compact ? 1 : 2, borderLeft: 4, borderLeftColor: TONES[tone] }}
		>
			<Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{body}
					</Typography>
				</Box>
				
			</Stack>
		</Paper>
	);
}
