import { BackgroundImage, Box, Paper, Text } from "@mantine/core";

export interface PollTileProps {
	title: string;
	/** Small line under the title. */
	caption?: string;
	/** Drawn behind the text when set. */
	imageUrl?: string;
	/** Draws the selected outline. */
	selected?: boolean;
	onActivate?: () => void;
}

export function PollTile({ title, caption = "", imageUrl = "", selected = false, onActivate }: PollTileProps) {
	const content = (
		<Box p="sm">
			<Text fw={600} size="sm" c={imageUrl === "" ? undefined : "white"} truncate>
				{title}
			</Text>
			{caption === "" ? null : (
				<Text size="xs" c={imageUrl === "" ? "dimmed" : "gray.3"} truncate>
					{caption}
				</Text>
			)}
		</Box>
	);

	return (
		<Paper
			withBorder
			radius="md"
			h={120}
			onClick={onActivate}
			style={{
				overflow: "hidden",
				cursor: onActivate ? "pointer" : "default",
				outline: selected ? "2px solid var(--mantine-color-blue-5)" : "none",
			}}
		>
			{imageUrl === "" ? content : <BackgroundImage src={imageUrl} h="100%">{content}</BackgroundImage>}
		</Paper>
	);
}
