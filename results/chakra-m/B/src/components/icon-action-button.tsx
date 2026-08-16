import { IconButton } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface IconActionButtonProps {
	/** The glyph to render; sized by the button, not by itself. */
	icon: ReactNode;
	/** Accessible name; the button shows no visible text. */
	label: string;
	/** Chakra button variant, passed through unchanged. */
	variant?: "solid" | "ghost" | "outline";
	/** Controls the button height. */
	size?: "xs" | "sm" | "md";
	/** Fired when the button is activated. */
	onClick: () => void;
}

export function IconActionButton({
	icon,
	label,
	variant = "ghost",
	size = "sm",
	onClick,
}: IconActionButtonProps) {
	return (
		<IconButton aria-label={label} variant={variant} size={size} borderRadius="full" onClick={onClick}>
			{icon}
		</IconButton>
	);
}
