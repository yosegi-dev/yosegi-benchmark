import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { toneColor } from "~/internal/tokens";
import type { ActionTone } from "~/models";

export interface NotificationBellProps {
	/** Number shown on the badge; zero hides the badge. */
	unreadCount: number;
	/** Palette the icon and badge take; `quiet` keeps the bell neutral. */
	tone?: ActionTone;
	onBellPress?: () => void;
}

export function NotificationBell({ unreadCount, tone = "quiet", onBellPress }: NotificationBellProps) {
	const color = toneColor(tone);
	return (
		<IconButton
			aria-label={`Notifications, ${unreadCount} unread`}
			color={color}
			onClick={onBellPress}
			sx={{ color: color === "inherit" ? "text.secondary" : undefined }}
		>
			<Badge
				badgeContent={unreadCount}
				max={99}
				color={color === "inherit" ? "error" : color}
				overlap="circular"
			>
				<NotificationsNoneIcon />
			</Badge>
		</IconButton>
	);
}
