import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";

const SEGMENTS = ["latest", "top", "media"] as const;

const SEGMENT_LABELS: Record<(typeof SEGMENTS)[number], string> = {
	latest: "Latest",
	top: "Top",
	media: "Media",
};

const sizeStyles = {
	sm: "h-7 text-xs",
	md: "h-9 text-sm",
	lg: "h-11 text-base",
};

export interface FeedSegmentedControlProps {
	/** Which sort the feed is currently using. */
	selected: "latest" | "top" | "media";
	onSelect: (segment: "latest" | "top" | "media") => void;
	size?: "sm" | "md" | "lg";
}

export function FeedSegmentedControl({
	selected,
	onSelect,
	size = "md",
}: FeedSegmentedControlProps) {
	return (
		<div className="inline-flex items-center rounded-full border p-0.5">
			{SEGMENTS.map((segment) => (
				<Button
					key={segment}
					variant={segment === selected ? "secondary" : "ghost"}
					className={cn("rounded-full px-4", sizeStyles[size])}
					aria-pressed={segment === selected}
					onClick={() => onSelect(segment)}
				>
					{SEGMENT_LABELS[segment]}
				</Button>
			))}
		</div>
	);
}
