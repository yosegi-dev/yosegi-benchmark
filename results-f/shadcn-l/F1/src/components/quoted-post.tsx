import type { ReactNode } from "react";

import type { PostModel } from "~/models";
import { Card, CardContent } from "~/ui/card";

export interface QuotedPostProps {
	/** The post being quoted; its author line and body are rendered inline. */
	post: PostModel;
	/** Slot for the quoted author's avatar. */
	avatar: ReactNode;
}

export function QuotedPost({ post, avatar }: QuotedPostProps) {
	return (
		<Card className="border-muted bg-muted/30 shadow-none">
			<CardContent className="flex flex-col gap-1 p-3">
				<div className="flex items-center gap-2 text-xs">
					{avatar}
					<span className="truncate font-semibold">{post.author.displayName}</span>
					<span className="truncate text-muted-foreground">@{post.author.handle}</span>
					<span aria-hidden className="text-muted-foreground">
						·
					</span>
					<span className="text-muted-foreground">{post.createdAt}</span>
				</div>
				<p className="line-clamp-4 whitespace-pre-wrap break-words text-sm">{post.body}</p>
			</CardContent>
		</Card>
	);
}
