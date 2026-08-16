import type { TrendModel } from "~/models";
import { Badge } from "~/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";
import { Separator } from "~/ui/separator";

export interface TrendBoardSection {
	id: string;
	title: string;
	trends: TrendModel[];
}

export interface TrendBoardProps {
	/** Grid columns; the board wraps below that. */
	columns?: number;
	sections: TrendBoardSection[];
	/** Receives the id of the trend that was chosen. */
	onSelect?: (id: string) => void;
}

export function TrendBoard({ columns = 2, sections, onSelect }: TrendBoardProps) {
	return (
		<div
			className="grid gap-4"
			style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
		>
			{sections.map((section) => (
				<Card key={section.id}>
					<CardHeader className="p-4 pb-2">
						<CardTitle className="text-sm">{section.title}</CardTitle>
					</CardHeader>
					<Separator />
					<CardContent className="flex flex-col gap-2 p-4">
						{section.trends.map((trend) => (
							<button
								key={trend.id}
								type="button"
								className="flex items-center justify-between gap-2 text-left text-sm hover:underline"
								onClick={() => onSelect?.(trend.id)}
							>
								<span className="truncate">{trend.label}</span>
								{trend.category ? (
									<Badge variant="outline" className="shrink-0">
										{trend.category}
									</Badge>
								) : null}
							</button>
						))}
					</CardContent>
				</Card>
			))}
		</div>
	);
}
