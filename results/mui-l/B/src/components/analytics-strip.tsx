import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export interface AnalyticsStripItem {
	id: string;
	label: string;
	/** Count drawn after the label. */
	count?: number;
}

export interface AnalyticsStripProps {
	/** The chips to draw. */
	items: AnalyticsStripItem[];
	/** Ids currently switched on. */
	selectedIds?: string[];
	/** Fired with the id that was clicked. */
	onToggle?: (id: string) => void;
	/** MUI chip scale. */
	size?: "small" | "medium";
	/** Lets the strip wrap instead of scrolling sideways. */
	wrap?: boolean;
}

export function AnalyticsStrip({ items, selectedIds = [], onToggle, size = "small", wrap = true }: AnalyticsStripProps) {
	return (
		<Box sx={{ overflowX: wrap ? "visible" : "auto", py: 0.5 }}>
			<Stack direction="row" spacing={0.75} sx={{ flexWrap: wrap ? "wrap" : "nowrap", gap: 0.75 }}>
				{items.map((item) => {
					const on = selectedIds.includes(item.id);
					return (
						<Chip
							key={item.id}
							label={item.count === undefined ? item.label : item.label + " · " + item.count}
							size={size}
							color={on ? "primary" : "default"}
							variant={on ? "filled" : "outlined"}
							clickable={onToggle !== undefined}
							onClick={onToggle ? () => onToggle(item.id) : undefined}
						/>
					);
				})}
			</Stack>
		</Box>
	);
}
