import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import type { AuthorModel } from "~/models";
import { Card, CardContent } from "~/ui/card";

import { UserAvatar } from "./user-avatar";

const sizeStyles = {
	sm: "gap-1 p-2 text-xs",
	md: "gap-2 p-3 text-sm",
	lg: "gap-3 p-4 text-base",
};

export interface PostCardCompactProps {
	author: AuthorModel;
	/** The post text, rendered inline and clamped to two lines. */
	body: string;
	/** Already-formatted time string shown after the handle. */
	timestamp: string;
	size?: "sm" | "md" | "lg";
	/** Rendered under the body, typically an action row. */
	children?: ReactNode;
	onClick?: () => void;
}

export function PostCardCompact({
	author,
	body,
	timestamp,
	size = "md",
	children,
	onClick,
}: PostCardCompactProps) {
	return (
		<Card
			className="cursor-pointer transition-colors hover:bg-accent/40"
			onClick={onClick}
		>
			<CardContent className={cn("flex flex-col", sizeStyles[size])}>
				<div className="flex items-center gap-2">
					<UserAvatar author={author} density="compact" />
					<span className="truncate font-semibold">{author.displayName}</span>
					<span className="truncate text-muted-foreground">@{author.handle}</span>
					<span className="ml-auto shrink-0 text-muted-foreground">{timestamp}</span>
				</div>
				<p className="line-clamp-2 break-words">{body}</p>
				{children}
			</CardContent>
		</Card>
	);
}
