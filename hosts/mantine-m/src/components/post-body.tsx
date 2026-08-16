import { Text } from "@mantine/core";
import type { Density } from "~/models";
import { textSize } from "~/tokens";

export interface PostBodyProps {
	/** The post text; passed as a prop rather than as children. */
	text: string;
	/** Drives the text size and line height. */
	density?: Density;
}

export function PostBody({ text, density = "cozy" }: PostBodyProps) {
	return (
		<Text size={textSize[density]} lh={density === "compact" ? 1.4 : 1.6} style={{ whiteSpace: "pre-wrap" }}>
			{text}
		</Text>
	);
}
