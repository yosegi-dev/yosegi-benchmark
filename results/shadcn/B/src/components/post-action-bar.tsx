import { densityGap } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density, PostModel } from "~/models";

import { ActionButton } from "./action-button";

export interface PostActionBarProps {
	/** Supplies every count, plus `likedByViewer` for the like button's active state. */
	post: PostModel;
	onReplyPress: () => void;
	onRepostPress: () => void;
	onLikePress: () => void;
	/** Spacing scale, passed through to each action button. */
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
		<div className={cn("flex items-center", densityGap[density])}>
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
		</div>
	);
}
