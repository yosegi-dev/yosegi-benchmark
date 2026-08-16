import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import type { ReactNode } from "react";

export interface IconActionButtonProps {
	/** The glyph to draw; the caller supplies it. */
	icon: ReactNode;
	/** Accessible name, also used as the tooltip. */
	label: string;
	/** Drawn as a badge on the icon when set. */
	count?: number;
	/** True when the action is already applied. */
	selected?: boolean;
	/** MUI icon-button scale. */
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	onClick: () => void;
}

export function IconActionButton({
	icon,
	label,
	count,
	selected = false,
	size = "medium",
	disabled = false,
	onClick,
}: IconActionButtonProps) {
	return (
		<Tooltip title={label}>
			<span>
				<IconButton
					aria-label={label}
					aria-pressed={selected}
					color={selected ? "primary" : "default"}
					size={size}
					disabled={disabled}
					onClick={onClick}
				>
					{count === undefined ? (
						icon
					) : (
						<Badge badgeContent={count} max={999} color="primary">
							{icon}
						</Badge>
					)}
				</IconButton>
			</span>
		</Tooltip>
	);
}
