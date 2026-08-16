import { Image, SimpleGrid } from "@mantine/core";
import type { Density } from "~/models";
import { gap } from "~/tokens";

export interface PostMediaProps {
	/** Attached images, laid out in a one- or two-column grid. */
	images: { url: string; alt: string }[];
	/** Drives the gap between images and their height. */
	density?: Density;
}

export function PostMedia({ images, density = "cozy" }: PostMediaProps) {
	if (images.length === 0) {
		return null;
	}

	return (
		<SimpleGrid cols={images.length === 1 ? 1 : 2} spacing={gap[density]}>
			{images.map((image) => (
				<Image
					key={image.url}
					src={image.url}
					alt={image.alt}
					radius="md"
					h={density === "compact" ? 140 : 200}
					fit="cover"
				/>
			))}
		</SimpleGrid>
	);
}
