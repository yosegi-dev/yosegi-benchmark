import { BadgeCheck } from "lucide-react";

import { Badge } from "~/ui/badge";

const levelLabels = {
	none: "None",
	basic: "Basic",
	trusted: "Trusted",
	official: "Official",
};

export interface VerificationBadgeProps {
	/** How far through the verification ladder this account is. */
	level: "none" | "basic" | "trusted" | "official";
	/** Overrides the label derived from the level. */
	label?: string;
	showIcon?: boolean;
}

export function VerificationBadge({ level, label, showIcon = true }: VerificationBadgeProps) {
	if (level === "none") {
		return null;
	}

	return (
		<Badge variant={level === "official" ? "default" : "secondary"} className="gap-1">
			{showIcon ? <BadgeCheck className="h-3 w-3" /> : null}
			{label ?? levelLabels[level]}
		</Badge>
	);
}
