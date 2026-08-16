import { ListMusic } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Badge } from "~/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/ui/card";

export interface PlaylistCardModel {
	id: string;
	title: string;
	summary: string;
	/** Shown as a pill in the header. */
	status: "draft" | "active" | "archived";
	updatedAt: string;
}

const sizeStyles = {
	sm: "p-3 text-xs",
	md: "p-4 text-sm",
	lg: "p-6 text-base",
};

export interface PlaylistCardProps {
	item: PlaylistCardModel;
	size?: "sm" | "md" | "lg";
	/** Rendered along the bottom edge, typically a row of actions. */
	footer?: ReactNode;
	onOpen?: () => void;
}

export function PlaylistCard({ item, size = "md", footer, onOpen }: PlaylistCardProps) {
	return (
		<Card className="cursor-pointer transition-colors hover:bg-accent/30" onClick={onOpen}>
			<CardHeader className={cn("flex-row items-center gap-2 space-y-0", sizeStyles[size])}>
				<ListMusic className="h-4 w-4 shrink-0 text-muted-foreground" />
				<CardTitle className="min-w-0 flex-1 truncate text-sm">{item.title}</CardTitle>
				<Badge variant={item.status === "active" ? "default" : "secondary"}>
					{item.status}
				</Badge>
			</CardHeader>
			<CardContent className={cn("pt-0", sizeStyles[size])}>
				<p className="line-clamp-3 text-muted-foreground">{item.summary}</p>
				<p className="mt-2 text-xs text-muted-foreground">Updated {item.updatedAt}</p>
			</CardContent>
			{footer ? <CardFooter className="gap-2 p-4 pt-0">{footer}</CardFooter> : null}
		</Card>
	);
}
