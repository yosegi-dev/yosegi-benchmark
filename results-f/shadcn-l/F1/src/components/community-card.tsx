import { Users } from "lucide-react";
import type { ReactNode } from "react";

import type { AuthorModel } from "~/models";
import { Button } from "~/ui/button";
import { Card, CardContent } from "~/ui/card";

import { UserAvatar } from "./user-avatar";

export interface CommunityCardProps {
	title: string;
	/** One-line description under the title. */
	subtitle?: string;
	/** Whoever created the community; drives the byline. */
	owner: AuthorModel;
	/** Members, followers, or items, depending on the community. */
	memberCount: number;
	/** Rendered in the top-right corner. */
	badge?: ReactNode;
	joined?: boolean;
	onJoinToggle?: (joined: boolean) => void;
}

export function CommunityCard({
	title,
	subtitle,
	owner,
	memberCount,
	badge,
	joined = false,
	onJoinToggle,
}: CommunityCardProps) {
	return (
		<Card>
			<CardContent className="flex flex-col gap-3 p-4">
				<div className="flex items-start gap-2">
					<Users className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
					<div className="min-w-0 flex-1">
						<div className="truncate font-semibold">{title}</div>
						{subtitle ? (
							<div className="truncate text-sm text-muted-foreground">{subtitle}</div>
						) : null}
					</div>
					{badge}
				</div>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<UserAvatar author={owner} density="compact" />
					<span className="truncate">{owner.displayName}</span>
					<span aria-hidden>·</span>
					<span>{memberCount.toLocaleString("en-US")} members</span>
				</div>
				<Button
					variant={joined ? "outline" : "default"}
					size="sm"
					className="rounded-full"
					onClick={() => onJoinToggle?.(!joined)}
				>
					{joined ? "Joined" : "Join"}
				</Button>
			</CardContent>
		</Card>
	);
}
