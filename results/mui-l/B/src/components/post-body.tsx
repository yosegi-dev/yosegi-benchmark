import Typography from "@mui/material/Typography";
import { bodyVariant } from "~/internal/tokens";
import type { Density } from "~/models";

export interface PostBodyProps {
	/** The post text, rendered as-is with newlines preserved. */
	text: string;
	/** Drives the type scale. */
	density?: Density;
}

export function PostBody({ text, density = "cozy" }: PostBodyProps) {
	return (
		<Typography
			variant={bodyVariant(density)}
			component="p"
			sx={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", color: "text.primary", fontWeight: 400 }}
		>
			{text}
		</Typography>
	);
}
