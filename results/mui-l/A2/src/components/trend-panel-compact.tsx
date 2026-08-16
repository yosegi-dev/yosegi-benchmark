import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { TrendModel } from "~/models";

export interface TrendPanelCompactProps {
	/** Panel title. */
	title: string;
	/** Rows to draw; the panel renders them itself. */
	trends: TrendModel[];
	/** Rows shown before the "show more" link. */
	limit?: number;
	/** Overall scale of the rows. */
	size?: "sm" | "md";
	/** Fired with the id of the row that was clicked. */
	onTrendClick?: (trendId: string) => void;
}

export function TrendPanelCompact({ title, trends, limit = 5, size = "md", onTrendClick }: TrendPanelCompactProps) {
	const visible = trends.slice(0, limit);
	return (
		<Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
			<Typography variant="subtitle2" sx={{ px: 1.5, py: 1, fontWeight: 700 }}>
				{title}
			</Typography>
			<Divider />
			<Stack divider={<Divider flexItem />}>
				{visible.map((trend) => (
					<ListItemButton
						key={trend.id}
						dense={size === "sm"}
						onClick={onTrendClick ? () => onTrendClick(trend.id) : undefined}
					>
						<ListItemText
							primary={trend.label}
							secondary={`${trend.postCount.toLocaleString("en-US")} posts`}
							slotProps={{
								primary: { variant: "body2", sx: { fontWeight: 600 } },
								secondary: { variant: "caption" },
							}}
						/>
					</ListItemButton>
				))}
			</Stack>
		</Paper>
	);
}
