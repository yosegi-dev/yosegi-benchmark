import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface HashtagListEntry {
	id: string;
	/** First line. */
	primary: string;
	/** Second line. */
	secondary?: string;
}

export interface HashtagListProps {
	/** Title above the list. */
	title: string;
	/** Rows to draw. */
	entries: HashtagListEntry[];
	/** Fired with the id of the row that was clicked. */
	onEntrySelect?: (id: string) => void;
	/** Drawn under the last row. */
	footer?: ReactNode;
	/** Copy shown when there are no rows. */
	emptyLabel?: string;
}

export function HashtagList({ title, entries, onEntrySelect, footer, emptyLabel = "Nothing here yet" }: HashtagListProps) {
	return (
		<Card variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			<Typography variant="subtitle1" sx={{ px: 2, py: 1.25, fontWeight: 700 }}>
				{title}
			</Typography>
			<Divider />
			{entries.length === 0 ? (
				<Typography variant="body2" color="text.secondary" sx={{ px: 2, py: 3, textAlign: "center" }}>
					{emptyLabel}
				</Typography>
			) : (
				<Stack divider={<Divider flexItem />}>
					{entries.map((entry) => (
						<ListItemButton
							key={entry.id}
							onClick={onEntrySelect ? () => onEntrySelect(entry.id) : undefined}
						>
							<ListItemText primary={entry.primary} secondary={entry.secondary} />
						</ListItemButton>
					))}
				</Stack>
			)}
			{footer ? (
				<>
					<Divider />
					{footer}
				</>
			) : null}
		</Card>
	);
}
