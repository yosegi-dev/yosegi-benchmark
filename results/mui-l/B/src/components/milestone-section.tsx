import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface MilestoneSectionProps {
	/** Section title. */
	heading: ReactNode;
	/** Section contents. */
	children: ReactNode;
	/** Copy under the heading. */
	description?: string;
	/** Vertical rhythm between the heading and the contents. */
	spacing?: "tight" | "normal" | "loose";
}

const GAPS = { tight: 1, normal: 2, loose: 3 };

export function MilestoneSection({ heading, children, description, spacing = "normal" }: MilestoneSectionProps) {
	return (
		<Box component="section" sx={{ py: 2 }}>
			<Stack spacing={0.5}>
				<Typography variant="subtitle1" component="h2" sx={{ fontWeight: 700 }}>
					{heading}
				</Typography>
				{description ? (
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				) : null}
			</Stack>
			<Box sx={{ height: GAPS[spacing] * 8 }} />
			{children}
		</Box>
	);
}
