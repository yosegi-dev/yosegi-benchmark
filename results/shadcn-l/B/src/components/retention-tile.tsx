import { ArrowDownRight, ArrowRight, ArrowUpRight, Repeat2 } from "lucide-react";
import type { ComponentType } from "react";

import { cn } from "~/lib/utils";
import { Card, CardContent } from "~/ui/card";

const trendIcons: Record<"up" | "down" | "flat", ComponentType<{ className?: string }>> = {
	up: ArrowUpRight,
	down: ArrowDownRight,
	flat: ArrowRight,
};

const trendStyles = {
	up: "text-emerald-600",
	down: "text-rose-600",
	flat: "text-muted-foreground",
};

export interface RetentionTileProps {
	label: string;
	/** Already formatted for display, e.g. "12.4K". */
	value: string;
	/** Percentage change against the previous period. */
	delta?: number;
	trend?: "up" | "down" | "flat";
}

export function RetentionTile({ label, value, delta, trend = "flat" }: RetentionTileProps) {
	const TrendIcon = trendIcons[trend];

	return (
		<Card>
			<CardContent className="flex flex-col gap-1 p-4">
				<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
					<Repeat2 className="h-3.5 w-3.5" />
					{label}
				</div>
				<div className="text-2xl font-semibold tabular-nums">{value}</div>
				{delta === undefined ? null : (
					<div className={cn("flex items-center gap-1 text-xs", trendStyles[trend])}>
						<TrendIcon className="h-3.5 w-3.5" />
						{delta}%
					</div>
				)}
			</CardContent>
		</Card>
	);
}
