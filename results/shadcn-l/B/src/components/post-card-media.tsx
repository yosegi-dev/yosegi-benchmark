import { cn } from "~/lib/utils";

const ratioStyles = {
	square: "aspect-square",
	wide: "aspect-video",
	portrait: "aspect-[3/4]",
};

export interface PostCardMediaProps {
	src: string;
	alt: string;
	/** Frame the image is cropped into. */
	ratio?: "square" | "wide" | "portrait";
	/** Shown over the bottom edge of the image. */
	caption?: string;
	onClick?: () => void;
}

export function PostCardMedia({
	src,
	alt,
	ratio = "wide",
	caption,
	onClick,
}: PostCardMediaProps) {
	return (
		<figure
			className={cn("relative overflow-hidden rounded-xl border", ratioStyles[ratio])}
			onClick={onClick}
		>
			<img src={src} alt={alt} className="h-full w-full object-cover" />
			{caption ? (
				<figcaption className="absolute inset-x-0 bottom-0 bg-black/50 px-3 py-1 text-xs text-white">
					{caption}
				</figcaption>
			) : null}
		</figure>
	);
}
