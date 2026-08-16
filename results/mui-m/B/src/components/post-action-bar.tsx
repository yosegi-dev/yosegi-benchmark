import Stack from "@mui/material/Stack";
import { ActionButton } from "~/components/action-button";
import { gapUnits } from "~/internal/tokens";
import type { Density, PostModel } from "~/models";

export interface PostActionBarProps {
	/** Counts and the viewer's like state are read straight off the post. */
	post: PostModel;
	onReplyPress: () => void;
	onRepostPress: () => void;
	onLikePress: () => void;
	/** Drives the size of every button in the bar. */
	density?: Density;
}

export function PostActionBar({
	post,
	onReplyPress,
	onRepostPress,
	onLikePress,
	density = "cozy",
}: PostActionBarProps) {
	return (
		<Stack
			direction="row"
			spacing={gapUnits(density)}
			sx={{ mt: 0.5, alignItems: "center" }}
			role="group"
			aria-label="Post actions"
		>
			<ActionButton
				tone="reply"
				label="Reply"
				count={post.replyCount}
				density={density}
				onPress={onReplyPress}
			/>
			<ActionButton
				tone="repost"
				label="Repost"
				count={post.repostCount}
				density={density}
				onPress={onRepostPress}
			/>
			<ActionButton
				tone="like"
				label="Like"
				count={post.likeCount}
				active={post.likedByViewer}
				density={density}
				onPress={onLikePress}
			/>
		</Stack>
	);
}
