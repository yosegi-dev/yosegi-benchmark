import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import type { PostModel } from "~/models";

export interface QuotedPostProps {
	/** The post being quoted; rendered read-only, without an action bar. */
	post: PostModel;
	/** Slot for the quoted author's avatar. */
	avatar: ReactNode;
}

export function QuotedPost({ post, avatar }: QuotedPostProps) {
	return (
		<Card variant="outlined" sx={{ borderRadius: 3, bgcolor: "action.hover" }}>
			<CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
				<Stack direction="row" spacing={1} sx={{ mb: 0.75, alignItems: "center" }}>
					{avatar}
					<Typography variant="body2" sx={{ fontWeight: 700 }}>
						{post.author.displayName}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{post.author.handle}
					</Typography>
				</Stack>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
				>
					{post.body}
				</Typography>
			</CardContent>
		</Card>
	);
}
