import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface SecurityCalloutProps {
	/** Headline. */
	title: string;
	/** Copy under the headline. */
	body: string;
	/** Colour the callout is drawn in. */
	tone?: "info" | "tip" | "warning";
	/** Drawn at the trailing edge, e.g. a link. */
	action?: ReactNode;
}

const TONES = { info: "info.main", tip: "success.main", warning: "warning.main" };

export function SecurityCallout({ title, body, tone = "info", action }: SecurityCalloutProps) {
	return (
		<Paper
			variant="outlined"
			sx={{ borderRadius: 2, p: 2, borderLeft: 4, borderLeftColor: TONES[tone] }}
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
				{action}
			</Stack>
		</Paper>
	);
}
