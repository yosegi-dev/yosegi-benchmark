import { ChevronRight, Calendar } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

export interface ScheduledRowProps {
	label: string;
	/** Right-aligned value, shown before the chevron. */
	value?: string;
	/** Rendered under the label when the row needs explaining. */
	help?: ReactNode;
	emphasis?: "default" | "strong";
	/** Draws a rule under the row. */
	divided?: boolean;
	onSelect?: () => void;
}

export function ScheduledRow({
	label,
	value,
	help,
	emphasis = "default",
	divided = true,
	onSelect,
}: ScheduledRowProps) {
	return (
		<div>
			<button
				type="button"
				className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-accent/40"
				onClick={onSelect}
			>
				<Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />
				<div className="min-w-0 flex-1">
					<div
						className={cn(
							"truncate text-sm",
							emphasis === "strong" ? "font-semibold" : "font-medium",
						)}
					>
						{label}
					</div>
					{help ? <div className="text-xs text-muted-foreground">{help}</div> : null}
				</div>
				{value ? <span className="text-sm text-muted-foreground">{value}</span> : null}
				<ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
			</button>
			{divided ? <Separator /> : null}
		</div>
	);
}
