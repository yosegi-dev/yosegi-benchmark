import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface DraftSectionProps {
	/** Section title. */
	heading: ReactNode;
	/** Section contents. */
	children: ReactNode;
	/** Copy under the heading. */
	description?: string;
	/** Draws a rule under the heading. */
	divided?: boolean;
}

export function DraftSection({ heading, children, description, divided = true }: DraftSectionProps) {
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
			{divided ? <Divider sx={{ my: 1.5 }} /> : <Box sx={{ height: 12 }} />}
			{children}
		</Box>
	);
}
