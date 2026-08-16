import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";

const variantStyles = {
	default: "",
	outlined: "border-2 shadow-none",
	elevated: "shadow-lg",
};

export interface LegacyPostCardProps {
	/** Headline shown above the body; posts without one pass an empty string. */
	title: string;
	body: string;
	authorName: string;
	authorAvatarUrl: string;
	/** Pre-formatted relative time, e.g. `"2 hours ago"`. */
	timeAgo: string;
	variant?: "default" | "outlined" | "elevated";
	/** Rendered at the bottom of the card, typically the action row. */
	children?: ReactNode;
	onClick?: () => void;
}

export function LegacyPostCard({
	title,
	body,
	authorName,
	authorAvatarUrl,
	timeAgo,
	variant = "default",
	children,
	onClick,
}: LegacyPostCardProps) {
	return (
		<Card className={cn(variantStyles[variant])} onClick={onClick}>
			<CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
				<Avatar className="h-9 w-9">
					<AvatarImage src={authorAvatarUrl} alt={authorName} />
					<AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
				</Avatar>
				<div className="min-w-0">
					<CardTitle className="truncate text-sm">{authorName}</CardTitle>
					<div className="text-xs text-muted-foreground">{timeAgo}</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-2 p-4 pt-0">
				{title ? <h3 className="font-semibold leading-tight">{title}</h3> : null}
				<p className="whitespace-pre-wrap break-words text-sm">{body}</p>
				{children}
			</CardContent>
		</Card>
	);
}
