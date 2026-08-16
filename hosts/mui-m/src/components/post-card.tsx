import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";
import { PostBody } from "~/components/post-body";
import { gapUnits, padUnits } from "~/internal/tokens";
import type { Density, PostModel } from "~/models";

export interface PostCardProps {
	/** The whole post; the card renders `post.body` itself. */
	post: PostModel;
	/** Slot for the author row above the body. */
	authorLine: ReactNode;
	/** Slot for the reply/repost/like bar below the body. */
	actions: ReactNode;
	/** Slot for attached images, shown under the body. */
	media?: ReactNode;
	/** Slot for a quoted post, shown under the body and above `media`. */
	quoted?: ReactNode;
	/** Drives the card's padding and type scale. */
	density?: Density;
}

export function PostCard({ post, authorLine, actions, media, quoted, density = "cozy" }: PostCardProps) {
	const pad = padUnits(density);
	return (
		<Card
			variant="outlined"
			component="article"
			sx={{ borderRadius: 3, "&:hover": { bgcolor: "action.hover" }, transition: "background-color 120ms" }}
		>
			<CardContent sx={{ p: pad, "&:last-child": { pb: pad } }}>
				<Stack spacing={gapUnits(density)}>
					{authorLine}
					<PostBody text={post.body} density={density} />
					{quoted}
					{media}
					{actions}
				</Stack>
			</CardContent>
		</Card>
	);
}
