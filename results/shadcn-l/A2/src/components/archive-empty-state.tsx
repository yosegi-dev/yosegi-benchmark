import { Archive } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const variantStyles = {
	default: "py-12",
	subtle: "py-6 text-muted-foreground",
	card: "rounded-xl border py-10",
};

export interface ArchiveEmptyStateProps {
	title: string;
	/** Explains why there is nothing to show and what to do next. */
	message: string;
	/** Rendered under the message, typically a button. */
	action?: ReactNode;
	variant?: "default" | "subtle" | "card";
}

export function ArchiveEmptyState({ title, message, action, variant = "default" }: ArchiveEmptyStateProps) {
	return (
		<div
			className={cn(
				"flex flex-col items-center gap-2 px-6 text-center",
				variantStyles[variant],
			)}
		>
			<Archive className="h-8 w-8 text-muted-foreground" />
			<h3 className="text-base font-semibold">{title}</h3>
			<p className="max-w-sm text-sm text-muted-foreground">{message}</p>
			{action}
		</div>
	);
}
