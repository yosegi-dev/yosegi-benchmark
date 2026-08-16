import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { gapUnits } from "~/internal/tokens";
import type { Density } from "~/models";

export interface PostMediaProps {
	/** Images attached to the post; `alt` is required on each. */
	images: { url: string; alt: string }[];
	/** Drives the gap between images and the overall height. */
	density?: Density;
}

export function PostMedia({ images, density = "cozy" }: PostMediaProps) {
	if (images.length === 0) {
		return null;
	}

	const height = density === "compact" ? 180 : density === "roomy" ? 320 : 240;

	return (
		<Box sx={{ borderRadius: 3, overflow: "hidden", border: 1, borderColor: "divider" }}>
			<ImageList
				cols={Math.min(images.length, 2)}
				gap={gapUnits(density) * 8}
				sx={{ m: 0, height, overflow: "hidden" }}
			>
				{images.map((image) => (
					<ImageListItem key={image.url}>
						<Box
							component="img"
							src={image.url}
							alt={image.alt}
							loading="lazy"
							sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}
