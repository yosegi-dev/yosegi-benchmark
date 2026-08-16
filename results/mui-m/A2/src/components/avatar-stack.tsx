import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface AvatarStackProps {
	/** Image URLs, drawn left to right with the first on top. */
	srcs: string[];
	/** Edge length of each avatar in px. */
	size?: number;
	/** Fraction of an avatar each one overlaps the previous. */
	overlap?: number;
	/** Text drawn after the stack, e.g. "and 12 others". */
	caption?: string;
}

export function AvatarStack({ srcs, size = 28, overlap = 0.35, caption }: AvatarStackProps) {
	return (
		<Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
			<Box sx={{ display: "inline-flex" }}>
				{srcs.map((src, index) => (
					<Avatar
						key={src}
						src={src}
						sx={{
							width: size,
							height: size,
							ml: index === 0 ? 0 : `${-size * overlap}px`,
							border: 2,
							borderColor: "background.paper",
							zIndex: srcs.length - index,
						}}
					/>
				))}
			</Box>
			{caption ? (
				<Typography variant="caption" color="text.secondary">
					{caption}
				</Typography>
			) : null}
		</Box>
	);
}
