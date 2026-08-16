import { BadgeCheck } from "lucide-react";
import type { ReactNode } from "react";

import type { AuthorModel } from "~/models";

export interface SuggestedUserRowProps {
	author: AuthorModel;
	/** Slot for the author's avatar. */
	avatar: ReactNode;
	/** Slot for the follow control on the right. */
	follow: ReactNode;
	/** Why this account is being suggested, e.g. `"Followed by rin"`. */
	reason?: string;
}

export function SuggestedUserRow({
	author,
	avatar,
	follow,
	reason,
}: SuggestedUserRowProps) {
	return (
		<div className="flex items-center gap-3 px-4 py-2">
			{avatar}
			<div className="min-w-0 flex-1">
				<div className="flex items-center gap-1">
					<span className="truncate text-sm font-semibold">{author.displayName}</span>
					{author.verified ? (
						<BadgeCheck className="h-4 w-4 shrink-0 text-sky-500" aria-label="Verified" />
					) : null}
				</div>
				<div className="truncate text-xs text-muted-foreground">@{author.handle}</div>
				{reason ? (
					<div className="truncate text-xs text-muted-foreground">{reason}</div>
				) : null}
			</div>
			{follow}
		</div>
	);
}
