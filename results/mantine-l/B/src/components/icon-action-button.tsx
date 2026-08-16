import { ActionIcon, Tooltip } from "@mantine/core";
import type { ReactNode } from "react";

export interface IconActionButtonProps {
	/** The glyph to render inside the button. */
	icon: ReactNode;
	/** Accessible name, also used as the tooltip text. */
	ariaLabel: string;
	/** Key of the Mantine palette. */
	color?: string;
	size?: "sm" | "md" | "lg";
	onClick: () => void;
	disabled?: boolean;
}

export function IconActionButton({
	icon,
	ariaLabel,
	color = "gray",
	size = "md",
	onClick,
	disabled = false,
}: IconActionButtonProps) {
	return (
		<Tooltip label={ariaLabel} withArrow>
			<ActionIcon
				variant="subtle"
				color={color}
				size={size}
				radius="xl"
				aria-label={ariaLabel}
				disabled={disabled}
				onClick={onClick}
			>
				{icon}
			</ActionIcon>
		</Tooltip>
	);
}
