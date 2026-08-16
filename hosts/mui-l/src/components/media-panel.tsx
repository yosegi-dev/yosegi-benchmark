import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface MediaPanelProps {
	/** Panel title. */
	heading: ReactNode;
	/** Panel contents. */
	children: ReactNode;
	/** Drawn to the right of the heading. */
	actions?: ReactNode;
	/** Drawn under the contents, behind a divider. */
	footer?: ReactNode;
	/** Tightens the padding. */
	dense?: boolean;
}

export function MediaPanel({ heading, children, actions, footer, dense = false }: MediaPanelProps) {
	const pad = dense ? 1.25 : 2;
	return (
		<Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
			<Stack direction="row" spacing={1} sx={{ px: pad, py: 1.25, alignItems: "center", justifyContent: "space-between" }}>
				{heading}
				{actions}
			</Stack>
			<Divider />
			<Stack sx={{ px: pad, py: pad }}>{children}</Stack>
			{footer ? (
				<>
					<Divider />
					<Stack sx={{ px: pad, py: 1 }}>{footer}</Stack>
				</>
			) : null}
		</Paper>
	);
}
