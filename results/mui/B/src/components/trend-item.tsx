import Chip from "@mui/material/Chip";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { TrendModel } from "~/models";

export interface TrendItemProps {
	trend: TrendModel;
	/** Position in the trend list, shown as "#1". */
	rank: number;
	onTrendPress?: () => void;
}

export function TrendItem({ trend, rank, onTrendPress }: TrendItemProps) {
	return (
		<ListItemButton onClick={onTrendPress} sx={{ px: 2, py: 1.25, alignItems: "flex-start" }}>
			<Stack spacing={0.25} sx={{ minWidth: 0, flex: 1 }}>
				<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
					<Typography variant="caption" color="text.secondary">
						#{rank}
					</Typography>
					{trend.category ? (
						<Chip label={trend.category} size="small" variant="outlined" sx={{ height: 18, fontSize: 11 }} />
					) : null}
				</Stack>
				<Typography variant="subtitle2" sx={{ fontWeight: 700 }} noWrap>
					{trend.label}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					{trend.postCount.toLocaleString("en-US")} posts
				</Typography>
			</Stack>
		</ListItemButton>
	);
}
