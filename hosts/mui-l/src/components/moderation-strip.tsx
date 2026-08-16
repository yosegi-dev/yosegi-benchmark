import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface ModerationStripProps {
	/** Chip labels, in display order. */
	labels: string[];
	/** Text drawn before the chips. */
	caption?: string;
	/** Chips shown before the overflow counter. */
	max?: number;
	/** Drawn after the chips. */
	trailing?: ReactNode;
	/** Colour applied to every chip. */
	color?: "default" | "primary" | "secondary";
}

export function ModerationStrip({ labels, caption, max = 6, trailing, color = "default" }: ModerationStripProps) {
	const shown = labels.slice(0, max);
	const hidden = labels.length - shown.length;
	return (
		<Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", gap: 0.75 }}>
			{caption ? (
				<Typography variant="caption" color="text.secondary">
					{caption}
				</Typography>
			) : null}
			{shown.map((label) => (
				<Chip key={label} label={label} size="small" color={color} variant="outlined" />
			))}
			{hidden > 0 ? <Chip label={"+" + hidden} size="small" variant="filled" /> : null}
			{trailing}
		</Stack>
	);
}
