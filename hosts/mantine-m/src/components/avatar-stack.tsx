import { Avatar, Box } from "@mantine/core";

export interface AvatarStackProps {
	/** Image URLs, drawn front to back. */
	sources: string[];
	/** Maximum number of images drawn. */
	max?: number;
	/** Negative offset in px applied between images. */
	spacing?: number;
}

export function AvatarStack({ sources, max = 5, spacing = 12 }: AvatarStackProps) {
	return (
		<Box style={{ display: "flex" }}>
			{sources.slice(0, max).map((source, index) => (
				<Avatar
					key={source}
					src={source}
					alt=""
					size={28}
					radius="xl"
					ml={index === 0 ? 0 : -spacing}
					style={{ border: "2px solid var(--mantine-color-body)", zIndex: max - index }}
				/>
			))}
		</Box>
	);
}
