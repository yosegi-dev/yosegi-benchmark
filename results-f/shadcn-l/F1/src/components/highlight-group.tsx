import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const gapStyles = {
	xs: "gap-0.5",
	sm: "gap-1.5",
	md: "gap-3",
};

export interface HighlightGroupProps {
	/** The items to lay out. */
	children: ReactNode;
	/** Lets the items flow onto a second line. */
	wrap?: boolean;
	gap?: "xs" | "sm" | "md";
	/** Accessible name for the group as a whole. */
	label?: string;
}

export function HighlightGroup({ children, wrap = true, gap = "sm", label }: HighlightGroupProps) {
	return (
		<div
			role="group"
			aria-label={label}
			className={cn("flex items-center", wrap && "flex-wrap", gapStyles[gap])}
		>
			{children}
		</div>
	);
}
