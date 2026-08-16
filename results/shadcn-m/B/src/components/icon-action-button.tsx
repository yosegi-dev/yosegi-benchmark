import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";

export interface IconActionButtonProps {
	/** The glyph to render; sized by the caller. */
	icon: ReactNode;
	/** Accessible name, since the button shows no text. */
	label: string;
	variant?: "primary" | "secondary" | "ghost";
	/** Draws the pressed state. */
	selected?: boolean;
	onClick: () => void;
}

const variantMap = {
	primary: "default",
	secondary: "secondary",
	ghost: "ghost",
} as const;

export function IconActionButton({
	icon,
	label,
	variant = "ghost",
	selected = false,
	onClick,
}: IconActionButtonProps) {
	return (
		<Button
			variant={variantMap[variant]}
			size="icon"
			className={cn("rounded-full", selected && "bg-accent text-accent-foreground")}
			aria-label={label}
			aria-pressed={selected}
			onClick={onClick}
		>
			{icon}
		</Button>
	);
}
