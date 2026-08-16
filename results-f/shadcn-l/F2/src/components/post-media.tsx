import { densityGap } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";

export interface PostMediaProps {
	/** One entry per image; `alt` is required because posts must stay readable. */
	images: { url: string; alt: string }[];
	/** Spacing scale, which here selects the gap between images. */
	density?: Density;
}

export function PostMedia({ images, density = "cozy" }: PostMediaProps) {
	if (images.length === 0) {
		return null;
	}

	return (
		<div
			className={cn(
				"grid overflow-hidden rounded-xl border",
				images.length > 1 ? "grid-cols-2" : "grid-cols-1",
				densityGap[density],
			)}
		>
			{images.map((image) => (
				<img
					key={image.url}
					src={image.url}
					alt={image.alt}
					className="h-full w-full object-cover"
				/>
			))}
		</div>
	);
}
