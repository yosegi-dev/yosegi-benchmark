import { X, Hash } from "lucide-react";

import { cn } from "~/lib/utils";

const toneStyles = {
	neutral: "border bg-background text-foreground",
	accent: "bg-primary text-primary-foreground",
	muted: "bg-muted text-muted-foreground",
};

export interface TopicChipProps {
	label: string;
	tone?: "neutral" | "accent" | "muted";
	/** Shows the leading glyph. */
	withIcon?: boolean;
	/** Shows the trailing close button. */
	removable?: boolean;
	onRemove?: () => void;
}

export function TopicChip({
	label,
	tone = "neutral",
	withIcon = true,
	removable = false,
	onRemove,
}: TopicChipProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
				toneStyles[tone],
			)}
		>
			{withIcon ? <Hash className="h-3 w-3" /> : null}
			{label}
			{removable ? (
				<button type="button" aria-label={"Remove " + label} onClick={onRemove}>
					<X className="h-3 w-3" />
				</button>
			) : null}
		</span>
	);
}
