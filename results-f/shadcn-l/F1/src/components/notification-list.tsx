import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

export interface NotificationListEntry {
	id: string;
	primary: string;
	secondary?: string;
}

export interface NotificationListProps {
	entries: NotificationListEntry[];
	/** Shown in place of the rows when there is nothing to list. */
	emptyLabel?: string;
	/** Rendered at the right of every row. */
	accessory?: ReactNode;
	/** Removes the rules between rows. */
	seamless?: boolean;
	onEntrySelect?: (id: string) => void;
}

export function NotificationList({
	entries,
	emptyLabel = "Nothing here yet",
	accessory,
	seamless = false,
	onEntrySelect,
}: NotificationListProps) {
	if (entries.length === 0) {
		return <p className="px-4 py-6 text-center text-sm text-muted-foreground">{emptyLabel}</p>;
	}

	return (
		<ul className={cn("flex flex-col", !seamless && "divide-y")}>
			{entries.map((entry) => (
				<li key={entry.id}>
					<button
						type="button"
						className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-accent/40"
						onClick={() => onEntrySelect?.(entry.id)}
					>
						<div className="min-w-0 flex-1">
							<div className="truncate text-sm">{entry.primary}</div>
							{entry.secondary ? (
								<div className="truncate text-xs text-muted-foreground">
									{entry.secondary}
								</div>
							) : null}
						</div>
						{accessory}
					</button>
				</li>
			))}
		</ul>
	);
}
