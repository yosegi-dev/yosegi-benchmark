import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface HighlightBannerProps {
	/** Headline. */
	title: string;
	/** Copy under the headline. */
	body: string;
	/** Label of the primary button; the button is hidden without it. */
	actionLabel?: string;
	/** Placement of the banner in the page flow. */
	placement?: "inline" | "top" | "bottom";
	onAction?: () => void;
	onClose?: () => void;
}

export function HighlightBanner({ title, body, actionLabel, placement = "inline", onAction, onClose }: HighlightBannerProps) {
	return (
		<Paper
			variant="outlined"
			sx={{
				borderRadius: placement === "inline" ? 3 : 0,
				p: 2,
				bgcolor: "action.hover",
				borderLeft: 4,
				borderLeftColor: "primary.main",
			}}
		>
			<Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{body}
					</Typography>
				</Box>
				{actionLabel ? (
					<Button size="small" variant="contained" onClick={onAction} sx={{ borderRadius: 999, textTransform: "none" }}>
						{actionLabel}
					</Button>
				) : null}
				{onClose ? (
					<Button size="small" color="inherit" onClick={onClose} sx={{ textTransform: "none" }}>
						Dismiss
					</Button>
				) : null}
			</Stack>
		</Paper>
	);
}
