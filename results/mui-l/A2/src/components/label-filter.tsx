import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";

export interface LabelFilterProps {
	/** Filters that are switched on, in display order. */
	activeLabels: string[];
	/** Fired with the label that was removed. */
	onRemove: (label: string) => void;
	/** Clears every filter; the button is hidden without it. */
	onClearAll?: () => void;
	/** Drawn before the chips, e.g. an "add filter" button. */
	leading?: ReactNode;
	/** How the row wraps when it runs out of width. */
	overflow?: "wrap" | "scroll";
}

export function LabelFilter({ activeLabels, onRemove, onClearAll, leading, overflow = "wrap" }: LabelFilterProps) {
	return (
		<Stack
			direction="row"
			spacing={0.75}
			divider={<Divider orientation="vertical" flexItem />}
			sx={{
				alignItems: "center",
				flexWrap: overflow === "wrap" ? "wrap" : "nowrap",
				overflowX: overflow === "scroll" ? "auto" : "visible",
				gap: 0.75,
				py: 0.5,
			}}
		>
			{leading}
			{activeLabels.map((label) => (
				<Chip key={label} label={label} size="small" onDelete={() => onRemove(label)} />
			))}
			{onClearAll && activeLabels.length > 0 ? (
				<Button size="small" color="inherit" onClick={onClearAll} sx={{ textTransform: "none" }}>
					Clear
				</Button>
			) : null}
		</Stack>
	);
}
