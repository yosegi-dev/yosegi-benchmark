import type { ReactNode } from "react";

import type { AuthorModel } from "~/models";
import { Button } from "~/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";

import { UserAvatar } from "./user-avatar";

export interface SuggestedUserPanelLegacyProps {
	title: string;
	/** The panel renders its own rows from this list. */
	users: AuthorModel[];
	onFollowClick?: (user: AuthorModel) => void;
	/** Appended below the rows, typically a "show more" link. */
	children?: ReactNode;
}

export function SuggestedUserPanelLegacy({
	title,
	users,
	onFollowClick,
	children,
}: SuggestedUserPanelLegacyProps) {
	return (
		<Card>
			<CardHeader className="p-4 pb-2">
				<CardTitle className="text-sm">{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 p-4 pt-0">
				{users.map((user) => (
					<div key={user.id} className="flex items-center gap-2">
						<UserAvatar author={user} density="compact" />
						<div className="min-w-0 flex-1">
							<div className="truncate text-sm font-semibold">{user.displayName}</div>
							<div className="truncate text-xs text-muted-foreground">@{user.handle}</div>
						</div>
						<Button
							size="sm"
							variant="outline"
							className="rounded-full"
							onClick={() => onFollowClick?.(user)}
						>
							Follow
						</Button>
					</div>
				))}
				{children}
			</CardContent>
		</Card>
	);
}
