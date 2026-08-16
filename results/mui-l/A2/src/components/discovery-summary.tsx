import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface DiscoverySummaryProps {
	/** What is being measured. */
	label: string;
	/** Current amount. */
	value: number;
	/** Amount that counts as full. */
	total: number;
	/** Formats the value as a percentage instead of a count. */
	asPercent?: boolean;
	/** Palette of the bar. */
	color?: "primary" | "success" | "warning" | "error";
}

export function DiscoverySummary({ label, value, total, asPercent = false, color = "primary" }: DiscoverySummaryProps) {
	const ratio = total === 0 ? 0 : Math.min(100, Math.round((value / total) * 100));
	return (
		<Paper variant="outlined" sx={{ borderRadius: 2, p: 1.5 }}>
			<Stack direction="row" spacing={1} sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{label}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					{asPercent ? `${ratio}%` : value.toLocaleString("en-US")}
				</Typography>
			</Stack>
			<Box sx={{ mt: 1 }}>
				<LinearProgress variant="determinate" value={ratio} color={color} sx={{ height: 6, borderRadius: 3 }} />
			</Box>
			
		</Paper>
	);
}
