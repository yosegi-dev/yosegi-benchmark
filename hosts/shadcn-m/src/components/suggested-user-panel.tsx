import type { ReactNode } from "react";

import { densityPadding, densityText } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";

export interface SuggestedUserPanelProps {
	/** Panel title, e.g. `"Who to follow"`. */
	heading: string;
	/** Slot for the panel rows. */
	rows: ReactNode;
	/** Spacing scale applied to the panel's padding. */
	density?: Density;
}

export function SuggestedUserPanel({
	heading,
	rows,
	density = "cozy",
}: SuggestedUserPanelProps) {
	return (
		<Card>
			<CardHeader className={cn(densityPadding[density], "pb-2")}>
				<CardTitle className={cn(densityText[density])}>{heading}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col p-0 pb-2">{rows}</CardContent>
		</Card>
	);
}
