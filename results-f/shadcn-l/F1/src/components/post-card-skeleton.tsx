import { cn } from "~/lib/utils";
import { Card, CardContent } from "~/ui/card";

const sizeStyles = {
	sm: "gap-1.5 p-2",
	md: "gap-2 p-4",
	lg: "gap-3 p-6",
};

export interface PostCardSkeletonProps {
	/** How many body placeholder lines to draw. */
	lines?: number;
	size?: "sm" | "md" | "lg";
	/** Draws an extra block where an image would be. */
	showMedia?: boolean;
}

export function PostCardSkeleton({
	lines = 3,
	size = "md",
	showMedia = false,
}: PostCardSkeletonProps) {
	return (
		<Card aria-hidden>
			<CardContent className={cn("flex flex-col", sizeStyles[size])}>
				<div className="flex items-center gap-2">
					<div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
					<div className="h-3 w-32 animate-pulse rounded bg-muted" />
				</div>
				{Array.from({ length: lines }, (_, index) => (
					<div
						key={`line-${index}`}
						className={cn(
							"h-3 animate-pulse rounded bg-muted",
							index === lines - 1 ? "w-2/3" : "w-full",
						)}
					/>
				))}
				{showMedia ? <div className="h-40 w-full animate-pulse rounded-xl bg-muted" /> : null}
			</CardContent>
		</Card>
	);
}
