import { Badge } from "@mantine/core";

const STATUS_COLOR: Record<"active" | "pending" | "paused" | "archived", string> = {
	active: "green",
	pending: "yellow",
	paused: "gray",
	archived: "dark",
};

export interface MembershipBadgeProps {
	/** Text inside the badge. */
	label: string;
	/** Drives the colour. */
	status: "active" | "pending" | "paused" | "archived";
	size?: "xs" | "sm" | "md";
	/** Draws the badge outlined instead of tinted. */
	outlined?: boolean;
}

export function MembershipBadge({ label, status, size = "sm", outlined = false }: MembershipBadgeProps) {
	return (
		<Badge size={size} radius="sm" color={STATUS_COLOR[status]} variant={outlined ? "outline" : "light"}>
			{label}
		</Badge>
	);
}
