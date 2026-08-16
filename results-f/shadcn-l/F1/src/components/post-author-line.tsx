import { BadgeCheck, Globe, Lock, Users, UsersRound } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import type { AuthorModel, Visibility } from "~/models";

const VISIBILITY_MARKERS: Record<
	Visibility,
	{ icon: ComponentType<{ className?: string }>; label: string }
> = {
	public: { icon: Globe, label: "Public" },
	followers: { icon: Users, label: "Followers" },
	circle: { icon: UsersRound, label: "Circle" },
	unlisted: { icon: Lock, label: "Unlisted" },
};

export interface PostAuthorLineProps {
	author: AuthorModel;
	/** Trailing text after the handle, e.g. the relative post time `"2h"`. */
	label: string;
	/** Slot for the author's avatar. */
	avatar: ReactNode;
	/** When set, a small audience marker is rendered after the label. */
	visibility?: Visibility;
}

export function PostAuthorLine({
	author,
	label,
	avatar,
	visibility,
}: PostAuthorLineProps) {
	const marker = visibility ? VISIBILITY_MARKERS[visibility] : null;
	const MarkerIcon = marker?.icon ?? null;

	return (
		<div className="flex items-center gap-2">
			{avatar}
			<div className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
				<span className="truncate font-semibold">{author.displayName}</span>
				{author.verified ? (
					<BadgeCheck className="h-4 w-4 shrink-0 text-sky-500" aria-label="Verified" />
				) : null}
				<span className="truncate text-muted-foreground">@{author.handle}</span>
				<span aria-hidden className="text-muted-foreground">
					·
				</span>
				<span className="text-muted-foreground">{label}</span>
				{MarkerIcon && marker ? (
					<MarkerIcon
						className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
						aria-label={marker.label}
					/>
				) : null}
			</div>
		</div>
	);
}
