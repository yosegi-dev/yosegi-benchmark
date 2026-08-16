import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import type { MouseEvent } from "react";

export interface FeedSegmentedControlProps {
	/** The selected segment. */
	value: string;
	/** Segment labels; the value of a segment is its label. */
	options: string[];
	/** Fired with the segment that was picked; ignores a click on the active one. */
	onChange: (value: string) => void;
	/** MUI toggle-button scale. */
	size?: "small" | "medium" | "large";
	/** Stretches the control to the width of its container. */
	fullWidth?: boolean;
}

export function FeedSegmentedControl({
	value,
	options,
	onChange,
	size = "small",
	fullWidth = true,
}: FeedSegmentedControlProps) {
	return (
		<ToggleButtonGroup
			exclusive
			value={value}
			size={size}
			fullWidth={fullWidth}
			onChange={(_event: MouseEvent<HTMLElement>, next: string | null) => {
				if (next !== null) {
					onChange(next);
				}
			}}
			sx={{ borderRadius: 999, "& .MuiToggleButton-root": { textTransform: "none", borderRadius: 999 } }}
		>
			{options.map((option) => (
				<ToggleButton key={option} value={option}>
					{option}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
}
