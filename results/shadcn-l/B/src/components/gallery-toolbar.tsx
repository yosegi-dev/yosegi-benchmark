import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const alignStyles = {
	start: "justify-start",
	between: "justify-between",
	end: "justify-end",
};

export interface GalleryToolbarProps {
	/** The controls to lay out. */
	children: ReactNode;
	align?: "start" | "between" | "end";
	/** Draws a rule under the toolbar. */
	bordered?: boolean;
}

export function GalleryToolbar({ children, align = "start", bordered = true }: GalleryToolbarProps) {
	return (
		<div
			role="toolbar"
			className={cn(
				"flex items-center gap-1 px-2 py-1.5",
				alignStyles[align],
				bordered && "border-b",
			)}
		>
			{children}
		</div>
	);
}
