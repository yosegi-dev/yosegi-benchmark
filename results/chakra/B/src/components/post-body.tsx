import { Text } from "@chakra-ui/react";
import type { Density } from "~/models";

const bodySize = {
	compact: "sm",
	cozy: "md",
	roomy: "lg",
} as const;

export interface PostBodyProps {
	/** The post text, rendered verbatim with line breaks preserved. */
	text: string;
	/** Controls the font size and line height. */
	density?: Density;
}

export function PostBody({ text, density = "cozy" }: PostBodyProps) {
	return (
		<Text textStyle={bodySize[density]} whiteSpace="pre-wrap" wordBreak="break-word" color="fg">
			{text}
		</Text>
	);
}
