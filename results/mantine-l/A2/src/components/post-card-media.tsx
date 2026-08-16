import { AspectRatio, Box, Image, Text } from "@mantine/core";

export interface PostCardMediaProps {
	/** URL of the single attached image. */
	src: string;
	/** Shown beneath the image and used as its alt text. */
	caption?: string;
	/** Width divided by height of the frame. */
	ratio?: number;
	onClick?: () => void;
}

export function PostCardMedia({ src, caption = "", ratio = 16 / 9, onClick }: PostCardMediaProps) {
	return (
		<Box onClick={onClick} style={{ cursor: onClick ? "zoom-in" : "default" }}>
			<AspectRatio ratio={ratio}>
				<Image src={src} alt={caption} radius="md" fit="cover" />
			</AspectRatio>
			{caption === "" ? null : (
				<Text size="xs" c="dimmed" mt={4}>
					{caption}
				</Text>
			)}
		</Box>
	);
}
