import { Card, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { Density, PostModel } from "~/models";
import { PostBody } from "~/components/post-body";

const cardSize = {
	compact: "sm",
	cozy: "md",
	roomy: "lg",
} as const;

const bodyGap = {
	compact: "2",
	cozy: "3",
	roomy: "4",
} as const;

export interface PostCardProps {
	/** The post this card renders; the body text is read from it. */
	post: PostModel;
	/** Slot for the author line. */
	authorLine: ReactNode;
	/** Slot for the action bar. */
	actions: ReactNode;
	/** Slot for attached media. */
	media?: ReactNode;
	/** Slot for a quoted post. */
	quoted?: ReactNode;
	/** Controls the card padding and the gap between rows. */
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
		<Card.Root size={cardSize[density]} variant="outline" as="article">
			<Card.Body>
				<Stack gap={bodyGap[density]}>
					{authorLine}
					<PostBody text={post.body} density={density} />
					{media}
					{quoted}
					{actions}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
