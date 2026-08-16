import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";

export interface ImageViewerSource {
	url: string;
	alt: string;
}

export interface ImageViewerProps {
	sources: ImageViewerSource[];
	/** Index of the source currently on screen. */
	index: number;
	onIndexChange: (index: number) => void;
	/** Draws the filmstrip under the main frame. */
	showThumbnails?: boolean;
}

export function ImageViewer({
	sources,
	index,
	onIndexChange,
	showThumbnails = true,
}: ImageViewerProps) {
	const current = sources[index];
	if (!current) {
		return null;
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="relative overflow-hidden rounded-xl border bg-black">
				<img src={current.url} alt={current.alt} className="h-full w-full object-contain" />
				<Button
					variant="ghost"
					size="icon"
					aria-label="Previous"
					className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80"
					disabled={index === 0}
					onClick={() => onIndexChange(index - 1)}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Next"
					className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80"
					disabled={index === sources.length - 1}
					onClick={() => onIndexChange(index + 1)}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
			{showThumbnails ? (
				<div className="flex gap-1 overflow-x-auto">
					{sources.map((source, at) => (
						<button
							key={source.url}
							type="button"
							className={cn(
								"h-12 w-12 shrink-0 overflow-hidden rounded border",
								at === index && "ring-2 ring-ring",
							)}
							onClick={() => onIndexChange(at)}
						>
							<img src={source.url} alt="" className="h-full w-full object-cover" />
						</button>
					))}
				</div>
			) : null}
		</div>
	);
}
