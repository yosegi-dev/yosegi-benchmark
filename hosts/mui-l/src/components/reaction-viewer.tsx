import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface ReactionViewerProps {
	/** Image URLs laid out in a grid. */
	urls: string[];
	/** Alt text applied to every image; the grid is decorative otherwise. */
	altPrefix: string;
	/** Images per row. */
	columns?: 1 | 2 | 3;
	/** Drawn over the grid, e.g. a close button. */
	overlay?: ReactNode;
	/** Fired with the index that was clicked. */
	onFrameSelect?: (index: number) => void;
}

export function ReactionViewer({ urls, altPrefix, columns = 2, overlay, onFrameSelect }: ReactionViewerProps) {
	return (
		<Box sx={{ position: "relative" }}>
			<Box sx={{ display: "grid", gridTemplateColumns: "repeat(" + columns + ", minmax(0, 1fr))", gap: 1 }}>
				{urls.map((url, position) => (
					<Box
						key={url}
						component="img"
						src={url}
						alt={altPrefix + " " + (position + 1)}
						onClick={onFrameSelect ? () => onFrameSelect(position) : undefined}
						sx={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 2, cursor: "pointer" }}
					/>
				))}
			</Box>
			{overlay ? <Stack sx={{ position: "absolute", top: 8, right: 8 }}>{overlay}</Stack> : null}
			{urls.length === 0 ? (
				<Typography variant="body2" color="text.secondary">
					Nothing here yet
				</Typography>
			) : null}
		</Box>
	);
}
