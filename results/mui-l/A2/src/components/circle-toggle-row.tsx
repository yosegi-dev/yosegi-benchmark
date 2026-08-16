import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface CircleToggleRowSetting {
	id: string;
	label: string;
	/** Explanation under the label. */
	hint?: string;
	enabled: boolean;
}

export interface CircleToggleRowProps {
	/** The setting this row edits. */
	setting: CircleToggleRowSetting;
	/** Fired with the setting id and the state it is moving to. */
	onChange: (id: string, enabled: boolean) => void;
	/** Drawn between the text and the switch. */
	trailing?: ReactNode;
	/** Tightens the vertical padding. */
	dense?: boolean;
}

export function CircleToggleRow({ setting, onChange, trailing, dense = false }: CircleToggleRowProps) {
	return (
		<Stack direction="row" spacing={2} sx={{ px: 2, py: dense ? 1 : 1.75, alignItems: "center" }}>
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{setting.label}
				</Typography>
				{setting.hint ? (
					<Typography variant="caption" color="text.secondary" component="p">
						{setting.hint}
					</Typography>
				) : null}
			</Box>
			{trailing}
			<Switch
				size="small"
				checked={setting.enabled}
				slotProps={{ input: { "aria-label": setting.label } }}
				onChange={(event) => onChange(setting.id, event.target.checked)}
			/>
		</Stack>
	);
}
