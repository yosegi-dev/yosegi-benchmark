import { HStack } from "@chakra-ui/react";
import { ActionButton } from "~/components/action-button";
import type { Density, PostModel } from "~/models";

const barGap = {
	compact: "0",
	cozy: "1",
	roomy: "3",
} as const;

export interface PostActionBarProps {
	/** The post whose reply, repost and like counts are shown. */
	post: PostModel;
	/** Fired when the reply action is activated. */
	onReplyPress: () => void;
	/** Fired when the repost action is activated. */
	onRepostPress: () => void;
	/** Fired when the like action is activated. */
	onLikePress: () => void;
	/** Controls the button size and the gap between actions. */
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
		<HStack gap={barGap[density]} justify="start" mt="-1" ml="-2">
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
				label={post.likedByViewer ? "Unlike" : "Like"}
				count={post.likeCount}
				active={post.likedByViewer}
				density={density}
				onPress={onLikePress}
			/>
		</HStack>
	);
}
