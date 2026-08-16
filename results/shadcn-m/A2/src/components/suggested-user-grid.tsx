import { cn } from "~/lib/utils";
import type { AuthorModel } from "~/models";
import { Card, CardContent } from "~/ui/card";

import { UserAvatar } from "./user-avatar";

const sizeStyles = {
	sm: "gap-1 p-2 text-xs",
	md: "gap-2 p-3 text-sm",
	lg: "gap-3 p-4 text-base",
};

export interface SuggestedUserGridProps {
	users: AuthorModel[];
	columns?: 2 | 3 | 4;
	size?: "sm" | "md" | "lg";
	onUserClick?: (user: AuthorModel) => void;
}

export function SuggestedUserGrid({
	users,
	columns = 3,
	size = "md",
	onUserClick,
}: SuggestedUserGridProps) {
	return (
		<div
			className="grid gap-3"
			style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
		>
			{users.map((user) => (
				<Card
					key={user.id}
					className="cursor-pointer hover:bg-accent/40"
					onClick={() => onUserClick?.(user)}
				>
					<CardContent className={cn("flex flex-col items-center", sizeStyles[size])}>
						<UserAvatar author={user} />
						<span className="w-full truncate text-center font-semibold">
							{user.displayName}
						</span>
						<span className="w-full truncate text-center text-muted-foreground">
							@{user.handle}
						</span>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
