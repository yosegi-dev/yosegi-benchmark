import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface ModerationEmptyStateProps {
	/** Headline explaining what is missing. */
	title: string;
	/** Copy under the headline. */
	description?: string;
	/** Glyph drawn above the headline. */
	icon?: ReactNode;
	/** Drawn under the copy, e.g. a button. */
	action?: ReactNode;
	/** Overall scale of the block. */
	size?: "sm" | "md" | "lg";
}

const PADDING = { sm: 3, md: 5, lg: 8 };

export function ModerationEmptyState({ title, description, icon, action, size = "md" }: ModerationEmptyStateProps) {
	return (
		<Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", py: PADDING[size], px: 2 }}>
			{icon ? <Box sx={{ color: "text.disabled", fontSize: 40, lineHeight: 1 }}>{icon}</Box> : null}
			<Typography variant={size === "sm" ? "subtitle1" : "h6"} sx={{ fontWeight: 700 }}>
				{title}
			</Typography>
			{description ? (
				<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
					{description}
				</Typography>
			) : null}
			{action}
		</Stack>
	);
}
