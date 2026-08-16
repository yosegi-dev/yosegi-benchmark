import type { ReactNode } from "react";

import { densityGap, densityPadding } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density, PostModel } from "~/models";
import { Card, CardContent } from "~/ui/card";

import { PostBody } from "./post-body";

export interface PostCardProps {
	/** The whole post. The card renders `post.body` itself. */
	post: PostModel;
	/** Slot for the author row above the body. */
	authorLine: ReactNode;
	/** Slot for the action bar below the body. */
	actions: ReactNode;
	/** Slot for attached media, rendered under the body. */
	media?: ReactNode;
	/** Slot for a quoted post, rendered under the media. */
	quoted?: ReactNode;
	/** Spacing scale applied to the card's padding and gaps. */
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
		<Card>
			<CardContent
				className={cn("flex flex-col", densityPadding[density], densityGap[density])}
			>
				{authorLine}
				<PostBody text={post.body} density={density} />
				{media}
				{quoted}
				{actions}
			</CardContent>
		</Card>
	);
}
