import type { TrendModel } from "~/models";
import { Button } from "~/ui/button";

export interface TrendItemProps {
	trend: TrendModel;
	/** Position in the panel, rendered as `1 ·`, `2 ·`, and so on. */
	rank: number;
	onTrendPress?: () => void;
}

export function TrendItem({ trend, rank, onTrendPress }: TrendItemProps) {
	return (
		<Button
			variant="ghost"
			className="h-auto w-full flex-col items-start gap-0.5 rounded-none px-4 py-2 text-left"
			onClick={onTrendPress}
		>
			<span className="text-xs text-muted-foreground">
				{rank} ·{trend.category ? ` ${trend.category}` : " Trending"}
			</span>
			<span className="font-semibold">{trend.label}</span>
			<span className="text-xs text-muted-foreground">
				{trend.postCount.toLocaleString("en-US")} posts
			</span>
		</Button>
	);
}
