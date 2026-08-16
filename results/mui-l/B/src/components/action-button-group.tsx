import ButtonGroup from "@mui/material/ButtonGroup";
import type { ReactNode } from "react";

export interface ActionButtonGroupProps {
	/** The buttons to group. */
	children: ReactNode;
	/** MUI button scale applied to every child. */
	size?: "small" | "medium" | "large";
	/** Joins the buttons into one segmented control instead of spacing them. */
	attached?: boolean;
	/** Lays the buttons out top to bottom. */
	vertical?: boolean;
	/** Stretches the group to the width of its container. */
	fullWidth?: boolean;
}

export function ActionButtonGroup({
	children,
	size = "medium",
	attached = true,
	vertical = false,
	fullWidth = false,
}: ActionButtonGroupProps) {
	return (
		<ButtonGroup
			size={size}
			variant="outlined"
			fullWidth={fullWidth}
			orientation={vertical ? "vertical" : "horizontal"}
			sx={
				attached
					? { borderRadius: 999, overflow: "hidden" }
					: { gap: 1, "& .MuiButtonGroup-grouped": { borderRadius: 999, border: 1 } }
			}
		>
			{children}
		</ButtonGroup>
	);
}
