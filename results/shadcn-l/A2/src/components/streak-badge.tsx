import { Flame } from "lucide-react";

import { Badge } from "~/ui/badge";

const levelLabels = {
	none: "None",
	basic: "Basic",
	trusted: "Trusted",
	official: "Official",
};

export interface StreakBadgeProps {
	/** How far through the streak ladder this account is. */
	level: "none" | "basic" | "trusted" | "official";
	/** Overrides the label derived from the level. */
	label?: string;
	showIcon?: boolean;
}

export function StreakBadge({ level, label, showIcon = true }: StreakBadgeProps) {
	if (level === "none") {
		return null;
	}

	return (
		<Badge variant={level === "official" ? "default" : "secondary"} className="gap-1">
			{showIcon ? <Flame className="h-3 w-3" /> : null}
			{label ?? levelLabels[level]}
		</Badge>
	);
}
