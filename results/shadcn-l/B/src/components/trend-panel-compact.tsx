import { cn } from "~/lib/utils";
import type { TrendModel } from "~/models";
import { Button } from "~/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";

const sizeStyles = {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-base",
};

export interface TrendPanelCompactProps {
	title: string;
	/** Rendered in the order given; the panel does not sort. */
	trends: TrendModel[];
	size?: "sm" | "md" | "lg";
	onTrendClick?: (trend: TrendModel) => void;
}

export function TrendPanelCompact({
	title,
	trends,
	size = "md",
	onTrendClick,
}: TrendPanelCompactProps) {
	return (
		<Card>
			<CardHeader className="p-3 pb-1">
				<CardTitle className={cn(sizeStyles[size])}>{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col p-0 pb-2">
				{trends.map((trend) => (
					<Button
						key={trend.id}
						variant="ghost"
						className={cn(
							"h-auto justify-between rounded-none px-3 py-1.5",
							sizeStyles[size],
						)}
						onClick={() => onTrendClick?.(trend)}
					>
						<span className="truncate font-medium">{trend.label}</span>
						<span className="text-muted-foreground">
							{trend.postCount.toLocaleString("en-US")}
						</span>
					</Button>
				))}
			</CardContent>
		</Card>
	);
}
