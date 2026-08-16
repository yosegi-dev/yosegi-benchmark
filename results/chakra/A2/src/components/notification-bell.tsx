import { Box, Circle, Float, Icon, IconButton } from "@chakra-ui/react";
import type { ActionTone } from "~/models";

const tonePalette = {
	reply: "blue",
	repost: "green",
	like: "pink",
	quiet: "gray",
} as const;

export interface NotificationBellProps {
	/** Number of unread notifications; the badge is hidden when this is 0. */
	unreadCount: number;
	/** Picks the colour palette of the button and the badge. */
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
		<Box position="relative">
			<IconButton
				aria-label={`Notifications (${unreadCount} unread)`}
				variant="ghost"
				size="md"
				borderRadius="full"
				colorPalette={tonePalette[tone]}
				onClick={onBellPress}
			>
				<Icon viewBox="0 0 24 24" boxSize="5">
					<path
						d="M12 3a6 6 0 0 0-6 6v3.6L4.5 16h15L18 12.6V9a6 6 0 0 0-6-6Z"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinejoin="round"
					/>
					<path
						d="M10 19a2 2 0 0 0 4 0"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round"
					/>
				</Icon>
			</IconButton>
			{unreadCount > 0 ? (
				<Float placement="top-end" offsetX="1.5" offsetY="1.5">
					<Circle
						size="5"
						bg={`${tonePalette[tone]}.solid`}
						color={`${tonePalette[tone]}.contrast`}
						fontSize="2xs"
						fontWeight="bold"
					>
						{unreadCount > 99 ? "99+" : unreadCount}
					</Circle>
				</Float>
			) : null}
		</Box>
	);
}
