import { Badge } from "@mantine/core";

const STATUS_COLOR: Record<"active" | "pending" | "paused" | "archived", string> = {
	active: "green",
	pending: "yellow",
	paused: "gray",
	archived: "dark",
};

export interface RoleBadgeProps {
	/** Text inside the badge. */
	label: string;
	/** Drives the colour. */
	status: "active" | "pending" | "paused" | "archived";
	size?: "xs" | "sm" | "md";
	/** Draws the badge outlined instead of tinted. */
	outlined?: boolean;
}

export function RoleBadge({ label, status, size = "sm", outlined = false }: RoleBadgeProps) {
	return (
		<Badge size={size} radius="sm" color={STATUS_COLOR[status]} variant={outlined ? "outline" : "light"}>
			{label}
		</Badge>
	);
}
