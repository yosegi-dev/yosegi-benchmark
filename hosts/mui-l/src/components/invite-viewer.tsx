import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface InviteViewerFrame {
	url: string;
	alt: string;
	/** Drawn under the frame when set. */
	caption?: string;
}

export interface InviteViewerProps {
	/** Frames to page through. */
	frames: InviteViewerFrame[];
	/** Index of the visible frame; the viewer is controlled. */
	index: number;
	/** Fired with the index to move to. */
	onIndexChange: (index: number) => void;
	/** Aspect ratio the frame is cropped to. */
	ratio?: "square" | "wide" | "tall";
}

const RATIOS = { square: "1 / 1", wide: "16 / 9", tall: "4 / 5" };

export function InviteViewer({ frames, index, onIndexChange, ratio = "wide" }: InviteViewerProps) {
	const frame = frames[index];
	if (!frame) {
		return null;
	}
	return (
		<Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", bgcolor: "common.black" }}>
			<Box
				component="img"
				src={frame.url}
				alt={frame.alt}
				sx={{ display: "block", width: "100%", aspectRatio: RATIOS[ratio], objectFit: "contain" }}
			/>
			<Stack
				direction="row"
				sx={{
					position: "absolute",
					inset: 0,
					alignItems: "center",
					justifyContent: "space-between",
					px: 1,
					pointerEvents: "none",
				}}
			>
				<IconButton
					aria-label="Previous"
					disabled={index === 0}
					onClick={() => onIndexChange(index - 1)}
					sx={{ pointerEvents: "auto", bgcolor: "rgba(0,0,0,0.45)", color: "common.white" }}
				>
					<ChevronLeftIcon />
				</IconButton>
				<IconButton
					aria-label="Next"
					disabled={index === frames.length - 1}
					onClick={() => onIndexChange(index + 1)}
					sx={{ pointerEvents: "auto", bgcolor: "rgba(0,0,0,0.45)", color: "common.white" }}
				>
					<ChevronRightIcon />
				</IconButton>
			</Stack>
			{frame.caption ? (
				<Typography variant="caption" sx={{ position: "absolute", bottom: 8, left: 12, color: "common.white" }}>
					{frame.caption}
				</Typography>
			) : null}
		</Box>
	);
}
