import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Typography from "@mui/material/Typography";

export interface RankingTileProps {
	/** What the number counts. */
	label: string;
	/** The number, already formatted. */
	value: string;
	/** Change against the previous period, in percent. */
	delta?: number;
	/** Direction the change is drawn in. */
	trend?: "up" | "down" | "flat";
	onClick?: () => void;
}

export function RankingTile({ label, value, delta, trend = "flat", onClick }: RankingTileProps) {
	const arrow =
		trend === "up" ? (
			<TrendingUpIcon fontSize="small" color="success" />
		) : trend === "down" ? (
			<TrendingDownIcon fontSize="small" color="error" />
		) : (
			<TrendingFlatIcon fontSize="small" color="disabled" />
		);

	const body = (
		<Stack spacing={0.5} sx={{ p: 2, width: "100%", alignItems: "flex-start" }}>
			<Typography variant="caption" color="text.secondary">
				{label}
			</Typography>
			<Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
				{value}
			</Typography>
			{delta === undefined ? null : (
				<Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
					{arrow}
					<Typography variant="caption" color="text.secondary">
						{delta > 0 ? "+" : ""}
						{delta}%
					</Typography>
				</Stack>
			)}
		</Stack>
	);

	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			{onClick ? <ButtonBase onClick={onClick} sx={{ width: "100%", textAlign: "left" }}>{body}</ButtonBase> : body}
		</Paper>
	);
}
