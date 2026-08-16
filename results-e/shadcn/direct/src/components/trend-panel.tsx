import type { ReactNode } from "react";

import { densityPadding, densityText } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";

export interface TrendPanelProps {
	/** Panel title, e.g. `"Trends for you"`. */
	heading: string;
	/** Slot for the panel rows. */
	items: ReactNode;
	/** Spacing scale applied to the panel's padding. */
	density?: Density;
}

export function TrendPanel({ heading, items, density = "cozy" }: TrendPanelProps) {
	return (
		<Card>
			<CardHeader className={cn(densityPadding[density], "pb-2")}>
				<CardTitle className={cn(densityText[density])}>{heading}</CardTitle>
			</CardHeader>
			<CardContent className={cn("flex flex-col p-0 pb-2")}>{items}</CardContent>
		</Card>
	);
}
