import { AspectRatio, Box, Group, Image, Text, UnstyledButton } from "@mantine/core";

export interface GalleryViewerSource {
	src: string;
	caption?: string;
}

export interface GalleryViewerProps {
	sources: GalleryViewerSource[];
	/** Index of the source on screen. */
	index?: number;
	/** Fired with the index the user moved to. */
	onIndexChange?: (index: number) => void;
	/** Width divided by height of the frame. */
	ratio?: number;
}

export function GalleryViewer({ sources, index = 0, onIndexChange, ratio = 16 / 9 }: GalleryViewerProps) {
	const current = sources[index];
	if (current === undefined) {
		return null;
	}

	return (
		<Box>
			<AspectRatio ratio={ratio}>
				<Image src={current.src} alt={current.caption ?? ""} radius="md" fit="contain" />
			</AspectRatio>
			<Group justify="center" gap={6} mt="xs">
				{sources.map((source, position) => (
					<UnstyledButton
						key={source.src}
						w={8}
						h={8}
						bg={position === index ? "var(--mantine-color-blue-6)" : "var(--mantine-color-gray-4)"}
						style={{ borderRadius: 999 }}
						aria-label={`Go to item ${position + 1}`}
						onClick={() => onIndexChange?.(position)}
					/>
				))}
			</Group>
			{current.caption === undefined ? null : (
				<Text size="xs" c="dimmed" ta="center" mt={4}>
					{current.caption}
				</Text>
			)}
		</Box>
	);
}
