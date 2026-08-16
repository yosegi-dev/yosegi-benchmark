import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface LanguageListProps {
	/** The rows, already rendered by the caller. */
	children: ReactNode;
	/** Title above the rows; omit for an unlabelled list. */
	title?: string;
	/** Draws a rule between rows. */
	divided?: boolean;
	/** Vertical padding of the block. */
	padding?: "none" | "sm" | "md";
	/** Drawn to the right of the title. */
	action?: ReactNode;
}

const PADDING = { none: 0, sm: 1, md: 2 };

export function LanguageList({ children, title, divided = true, padding = "sm", action }: LanguageListProps) {
	return (
		<Box sx={{ py: PADDING[padding] }}>
			{title ? (
				<Stack direction="row" spacing={1} sx={{ px: 2, pb: 1, alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="overline" color="text.secondary">
						{title}
					</Typography>
					{action}
				</Stack>
			) : null}
			<Stack divider={divided ? <Divider flexItem /> : undefined}>{children}</Stack>
		</Box>
	);
}
