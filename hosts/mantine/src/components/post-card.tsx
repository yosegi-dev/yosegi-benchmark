import { Card, Stack } from "@mantine/core";
import type { ReactNode } from "react";
import type { Density, PostModel } from "~/models";
import { PostBody } from "~/components/post-body";
import { gap, pad } from "~/tokens";

export interface PostCardProps {
	/** The post to render; the body text is read from it. */
	post: PostModel;
	/** Slot above the body, holding the author and timestamp. */
	authorLine: ReactNode;
	/** Slot below the body, holding the reply/repost/like controls. */
	actions: ReactNode;
	/** Slot for attached images. */
	media?: ReactNode;
	/** Slot for a post this one quotes. */
	quoted?: ReactNode;
	/** Drives the card padding and body text size. */
	density?: Density;
}

export function PostCard({
	post,
	authorLine,
	actions,
	media,
	quoted,
	density = "cozy",
}: PostCardProps) {
	return (
		<Card component="article" withBorder radius="md" padding={pad[density]}>
			<Stack gap={gap[density]}>
				{authorLine}
				<PostBody text={post.body} density={density} />
				{media}
				{quoted}
				{actions}
			</Stack>
		</Card>
	);
}
