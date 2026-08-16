import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface InviteHeaderStat {
	label: string;
	value: number;
}

export interface InviteHeaderProps {
	/** Headline of the surface. */
	title: string;
	/** Line under the title. */
	subtitle?: string;
	/** Image drawn at the leading edge. */
	avatarUrl?: string;
	/** Counters drawn under the title. */
	stats?: InviteHeaderStat[];
	/** Controls drawn at the trailing edge. */
	actions?: ReactNode;
}

export function InviteHeader({ title, subtitle, avatarUrl, stats, actions }: InviteHeaderProps) {
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
			<Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
				{avatarUrl ? <Avatar src={avatarUrl} alt={title} sx={{ width: 56, height: 56 }} /> : null}
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="h6" sx={{ fontWeight: 700 }} noWrap>
						{title}
					</Typography>
					{subtitle ? (
						<Typography variant="body2" color="text.secondary" noWrap>
							{subtitle}
						</Typography>
					) : null}
				</Box>
				{actions}
			</Stack>
			{stats && stats.length > 0 ? (
				<>
					<Divider sx={{ my: 1.5 }} />
					<Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
						{stats.map((stat) => (
							<Box key={stat.label}>
								<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
									{stat.value.toLocaleString("en-US")}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{stat.label}
								</Typography>
							</Box>
						))}
					</Stack>
				</>
			) : null}
		</Paper>
	);
}
