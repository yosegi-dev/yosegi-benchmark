import { densityText } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";

export interface PostBodyProps {
	/** The post text. Newlines are preserved. */
	text: string;
	/** Spacing scale, which here selects the type size. */
	density?: Density;
}

export function PostBody({ text, density = "cozy" }: PostBodyProps) {
	return (
		<p className={cn("whitespace-pre-wrap break-words leading-relaxed", densityText[density])}>
			{text}
		</p>
	);
}
