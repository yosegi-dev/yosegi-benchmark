import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface NotificationCardEntry {
	id: string;
	/** Text of the entry. */
	label: string;
	/** Right-aligned value, already formatted. */
	value: string;
}

export interface NotificationCardProps {
	/** Card heading. */
	heading: string;
	/** Rows the card lists. */
	entries: NotificationCardEntry[];
	/** Drawn to the right of the heading. */
	action?: ReactNode;
	/** Drops the card's border for use inside another surface. */
	flush?: boolean;
}

export function NotificationCard({ heading, entries, action, flush = false }: NotificationCardProps) {
	return (
		<Card variant={flush ? "elevation" : "outlined"} elevation={0} sx={{ borderRadius: 3 }}>
			<CardContent>
				<Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
						{heading}
					</Typography>
					{action}
				</Stack>
				<Divider sx={{ my: 1.5 }} />
				<Stack spacing={1}>
					{entries.map((entry) => (
						<Box key={entry.id} sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
							<Typography variant="body2" color="text.secondary" noWrap>
								{entry.label}
							</Typography>
							<Typography variant="body2" sx={{ fontWeight: 600 }}>
								{entry.value}
							</Typography>
						</Box>
					))}
				</Stack>
			</CardContent>
		</Card>
	);
}
