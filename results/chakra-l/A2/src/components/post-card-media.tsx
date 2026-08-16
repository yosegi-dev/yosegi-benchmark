import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";

export interface PostCardMediaProps {
	/** Absolute URL of the single image to show. */
	src: string;
	/** Alternative text for the image. */
	alt: string;
	/** Width divided by height; 16/9 by default. */
	ratio?: number;
	/** Rendered under the image in muted text. */
	caption?: string;
	/** Fired when the image is activated. */
	onClick?: () => void;
}

export function PostCardMedia({ src, alt, ratio = 16 / 9, caption, onClick }: PostCardMediaProps) {
	return (
		<Box>
			<AspectRatio ratio={ratio} borderRadius="l2" overflow="hidden" onClick={onClick}>
				<Image src={src} alt={alt} objectFit="cover" bg="bg.muted" />
			</AspectRatio>
			{caption ? (
				<Text mt="1" fontSize="xs" color="fg.muted">
					{caption}
				</Text>
			) : null}
		</Box>
	);
}
