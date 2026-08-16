import { Bell } from "lucide-react";

import { cn } from "~/lib/utils";
import type { ActionTone } from "~/models";
import { Badge } from "~/ui/badge";
import { Button } from "~/ui/button";

const toneRing: Record<ActionTone, string> = {
	reply: "text-sky-600 hover:text-sky-700",
	repost: "text-emerald-600 hover:text-emerald-700",
	like: "text-rose-600 hover:text-rose-700",
	quiet: "text-muted-foreground hover:text-foreground",
};

export interface NotificationBellProps {
	/** Rendered as a badge; a value of 0 hides the badge entirely. */
	unreadCount: number;
	/** Product tone applied to the icon colour. */
	tone?: ActionTone;
	onBellPress?: () => void;
}

export function NotificationBell({
	unreadCount,
	tone = "quiet",
	onBellPress,
}: NotificationBellProps) {
	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn("relative rounded-full", toneRing[tone])}
			aria-label={`Notifications, ${unreadCount} unread`}
			onClick={onBellPress}
		>
			<Bell className="h-5 w-5" />
			{unreadCount > 0 ? (
				<Badge
					variant="destructive"
					className="absolute -right-1 -top-1 h-5 min-w-5 justify-center rounded-full px-1 py-0 text-[10px]"
				>
					{unreadCount > 99 ? "99+" : unreadCount}
				</Badge>
			) : null}
		</Button>
	);
}
