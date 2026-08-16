import type { ReactNode } from "react";

import type { AuthorModel } from "~/models";
import { Button } from "~/ui/button";

import { UserAvatar } from "./user-avatar";

export interface TimelineHeaderProps {
	/** The signed-in user, shown as the avatar on the left. */
	viewer: AuthorModel;
	/** Slot for the search control. */
	search: ReactNode;
	/** Slot for the notification control. */
	notifications: ReactNode;
	/** Called when the viewer's own avatar is pressed. */
	onViewerPress?: () => void;
}

export function TimelineHeader({
	viewer,
	search,
	notifications,
	onViewerPress,
}: TimelineHeaderProps) {
	return (
		<div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
			<Button
				variant="ghost"
				size="icon"
				className="rounded-full"
				aria-label={viewer.displayName}
				onClick={onViewerPress}
			>
				<UserAvatar author={viewer} density="compact" />
			</Button>
			<div className="min-w-0 flex-1">{search}</div>
			{notifications}
		</div>
	);
}
