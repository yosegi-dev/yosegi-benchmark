import { AspectRatio, Image, SimpleGrid } from "@chakra-ui/react";
import type { Density } from "~/models";

const mediaGap = {
	compact: "1",
	cozy: "2",
	roomy: "3",
} as const;

export interface PostMediaProps {
	/** The attached images, laid out in a grid of at most two columns. */
	images: { url: string; alt: string }[];
	/** Controls the gap between the images. */
	density?: Density;
}

export function PostMedia({ images, density = "cozy" }: PostMediaProps) {
	if (images.length === 0) {
		return null;
	}
	return (
		<SimpleGrid
			columns={images.length === 1 ? 1 : 2}
			gap={mediaGap[density]}
			borderRadius="l2"
			overflow="hidden"
		>
			{images.map((image) => (
				<AspectRatio key={image.url} ratio={images.length === 1 ? 16 / 9 : 1}>
					<Image src={image.url} alt={image.alt} objectFit="cover" bg="bg.muted" />
				</AspectRatio>
			))}
		</SimpleGrid>
	);
}
