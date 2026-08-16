import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface DigestEmptyStateProps {
	/** Headline explaining what is missing. */
	title: string;
	/** Copy under the headline. */
	description: string;
	/** Label of the recovery button; the button is hidden without it. */
	actionLabel?: string;
	/** Why the surface is empty, which changes the illustration. */
	reason?: "empty" | "filtered" | "error" | "offline";
	onAction?: () => void;
}

const GLYPHS = { empty: "✦", filtered: "⌕", error: "!", offline: "⌁" };

export function DigestEmptyState({ title, description, actionLabel, reason = "empty", onAction }: DigestEmptyStateProps) {
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, py: 5, px: 3, textAlign: "center" }}>
			<Stack spacing={1.5} sx={{ alignItems: "center" }}>
				<Typography component="span" sx={{ fontSize: 32, color: "text.disabled" }} aria-hidden>
					{GLYPHS[reason]}
				</Typography>
				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
					{description}
				</Typography>
				{actionLabel ? (
					<Button variant="outlined" onClick={onAction} sx={{ borderRadius: 999, textTransform: "none" }}>
						{actionLabel}
					</Button>
				) : null}
			</Stack>
		</Paper>
	);
}
