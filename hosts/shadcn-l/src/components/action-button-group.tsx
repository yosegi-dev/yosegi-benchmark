import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const alignStyles = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
};

const sizeStyles = {
	sm: "gap-0.5",
	md: "gap-2",
	lg: "gap-4",
};

export interface ActionButtonGroupProps {
	/** The buttons to lay out. */
	children: ReactNode;
	align?: "start" | "center" | "end";
	size?: "sm" | "md" | "lg";
}

export function ActionButtonGroup({
	children,
	align = "start",
	size = "md",
}: ActionButtonGroupProps) {
	return (
		<div
			role="group"
			className={cn("flex items-center", alignStyles[align], sizeStyles[size])}
		>
			{children}
		</div>
	);
}
