import { Group } from "@mantine/core";
import { ActionButton } from "~/components/action-button";
import type { Density, PostModel } from "~/models";

export interface PostActionBarProps {
	/** The post whose counts and liked state are shown. */
	post: PostModel;
	/** Fired when reply is activated. */
	onReplyPress: () => void;
	/** Fired when repost is activated. */
	onRepostPress: () => void;
	/** Fired when like is activated. */
	onLikePress: () => void;
	/** Drives the size of the buttons. */
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
		<Group gap="xs" wrap="nowrap">
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
		</Group>
	);
}
