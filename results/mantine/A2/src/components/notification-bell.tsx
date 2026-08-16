import { ActionIcon, Indicator } from "@mantine/core";
import type { ActionTone } from "~/models";
import { toneColor } from "~/tokens";

export interface NotificationBellProps {
	/** Badge count; the badge is hidden at 0. */
	unreadCount: number;
	/** Colour intent of the control. */
	tone?: ActionTone;
	/** Fired when the bell is activated. */
	onBellPress?: () => void;
}

export function NotificationBell({
	unreadCount,
	tone = "quiet",
	onBellPress,
}: NotificationBellProps) {
	return (
		<Indicator
			label={unreadCount}
			size={18}
			color="red"
			offset={4}
			withBorder
			disabled={unreadCount === 0}
			showZero={false}
		>
			<ActionIcon
				variant="subtle"
				color={toneColor[tone]}
				size="lg"
				radius="xl"
				aria-label={`Notifications, ${unreadCount} unread`}
				onClick={onBellPress}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
					<path d="M13.7 21a2 2 0 0 1-3.4 0" />
				</svg>
			</ActionIcon>
		</Indicator>
	);
}
