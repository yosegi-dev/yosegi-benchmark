import { cn } from "~/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/ui/avatar";

export interface AvatarStackProps {
	/** Image URLs, drawn left to right with the first on top. */
	srcs: string[];
	/** Edge length in pixels. */
	size?: number;
	/** How far each avatar slides under the previous one. */
	overlap?: "tight" | "loose";
}

export function AvatarStack({ srcs, size = 28, overlap = "tight" }: AvatarStackProps) {
	return (
		<div className={cn("flex items-center", overlap === "tight" ? "-space-x-3" : "-space-x-1")}>
			{srcs.map((src, index) => (
				<Avatar
					key={src}
					className="ring-2 ring-background"
					style={{ height: size, width: size, zIndex: srcs.length - index }}
				>
					<AvatarImage src={src} alt="" />
					<AvatarFallback />
				</Avatar>
			))}
		</div>
	);
}
