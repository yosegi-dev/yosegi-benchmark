import { HardDrive } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

const toneStyles = {
	neutral: "text-foreground",
	info: "text-sky-600",
	warning: "text-amber-600",
	danger: "text-rose-600",
};

export interface BackupRowProps {
	title: string;
	/** Secondary line under the title. */
	description?: string;
	/** Replaces the default icon at the start of the row. */
	leading?: ReactNode;
	/** Rendered at the far right, e.g. a switch or an overflow button. */
	trailing?: ReactNode;
	tone?: "neutral" | "info" | "warning" | "danger";
	onSelect?: () => void;
}

export function BackupRow({
	title,
	description,
	leading,
	trailing,
	tone = "neutral",
	onSelect,
}: BackupRowProps) {
	return (
		<div
			className="flex items-center gap-3 px-4 py-3 hover:bg-accent/40"
			onClick={onSelect}
		>
			{leading ?? <HardDrive className={cn("h-4 w-4 shrink-0", toneStyles[tone])} />}
			<div className="min-w-0 flex-1">
				<div className={cn("truncate text-sm font-medium", toneStyles[tone])}>{title}</div>
				{description ? (
					<div className="truncate text-xs text-muted-foreground">{description}</div>
				) : null}
			</div>
			{trailing}
		</div>
	);
}
