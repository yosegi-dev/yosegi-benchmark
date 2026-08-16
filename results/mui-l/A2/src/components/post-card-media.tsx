import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

export interface PostCardMediaProps {
	/** Image URL. One image only; use a gallery for more. */
	src: string;
	alt: string;
	/** Aspect ratio the image is cropped to. */
	ratio?: "square" | "wide" | "tall";
	/** Caption drawn over the bottom edge. */
	caption?: string;
	/** Marks the image as sensitive and blurs it until it is opened. */
	sensitive?: boolean;
	onClick?: () => void;
}

const RATIOS = { square: "1 / 1", wide: "16 / 9", tall: "4 / 5" };

export function PostCardMedia({
	src,
	alt,
	ratio = "wide",
	caption,
	sensitive = false,
	onClick,
}: PostCardMediaProps) {
	return (
		<ButtonBase
			onClick={onClick}
			sx={{
				display: "block",
				width: "100%",
				position: "relative",
				borderRadius: 2,
				overflow: "hidden",
				border: 1,
				borderColor: "divider",
			}}
		>
			<Box
				component="img"
				src={src}
				alt={alt}
				loading="lazy"
				sx={{
					display: "block",
					width: "100%",
					aspectRatio: RATIOS[ratio],
					objectFit: "cover",
					filter: sensitive ? "blur(18px)" : "none",
				}}
			/>
			{caption ? (
				<Typography
					variant="caption"
					sx={{
						position: "absolute",
						left: 0,
						right: 0,
						bottom: 0,
						px: 1,
						py: 0.5,
						color: "common.white",
						bgcolor: "rgba(0, 0, 0, 0.55)",
						textAlign: "left",
					}}
				>
					{caption}
				</Typography>
			) : null}
		</ButtonBase>
	);
}
