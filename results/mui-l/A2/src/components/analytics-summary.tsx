import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface AnalyticsSummaryProps {
	/** What is being measured. */
	label: string;
	/** Current amount. */
	value: number;
	/** Amount that counts as full. */
	total: number;
	/** Line under the bar. */
	caption?: string;
	/** Palette of the bar. */
	color?: "primary" | "success" | "warning" | "error";
}

export function AnalyticsSummary({ label, value, total, caption, color = "primary" }: AnalyticsSummaryProps) {
	const ratio = total === 0 ? 0 : Math.min(100, Math.round((value / total) * 100));
	return (
		<Paper variant="outlined" sx={{ borderRadius: 2, p: 1.5 }}>
			<Stack direction="row" spacing={1} sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{label}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					{value.toLocaleString("en-US")} / {total.toLocaleString("en-US")}
				</Typography>
			</Stack>
			<Box sx={{ mt: 1 }}>
				<LinearProgress variant="determinate" value={ratio} color={color} sx={{ height: 6, borderRadius: 3 }} />
			</Box>
			{caption ? (
				<Typography variant="caption" color="text.secondary" sx={{ mt: 0.75, display: "block" }}>
					{caption}
				</Typography>
			) : null}
		</Paper>
	);
}
