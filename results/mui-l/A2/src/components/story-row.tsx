import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AuthorModel } from "~/models";

export interface StoryRowProps {
	/** The account the row is about. */
	author: AuthorModel;
	/** Line under the display name. */
	summary: string;
	/** Pre-formatted timestamp shown at the trailing edge. */
	timestamp?: string;
	/** Small label drawn after the display name. */
	tag?: string;
	/** Tightens the vertical padding. */
	dense?: boolean;
}

export function StoryRow({ author, summary, timestamp, tag, dense = false }: StoryRowProps) {
	return (
		<Stack direction="row" spacing={1.5} sx={{ px: 2, py: dense ? 0.75 : 1.5, alignItems: "flex-start" }}>
			<Avatar src={author.avatarUrl} alt={author.displayName} sx={{ width: 32, height: 32 }} />
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Stack direction="row" spacing={0.75} sx={{ alignItems: "center", minWidth: 0 }}>
					<Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
						{author.displayName}
					</Typography>
					{tag ? <Chip label={tag} size="small" variant="outlined" sx={{ height: 18, fontSize: 11 }} /> : null}
				</Stack>
				<Typography variant="caption" color="text.secondary" component="p">
					{summary}
				</Typography>
			</Box>
			{timestamp ? (
				<Typography variant="caption" color="text.disabled" sx={{ flexShrink: 0 }}>
					{timestamp}
				</Typography>
			) : null}
		</Stack>
	);
}
