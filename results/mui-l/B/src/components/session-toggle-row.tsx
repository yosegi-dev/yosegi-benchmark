import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

export interface SessionToggleRowProps {
	/** Name of the setting. */
	label: string;
	/** Explanation under the label. */
	description?: string;
	/** Current state. */
	checked: boolean;
	/** Fired with the state the switch is moving to. */
	onCheckedChange: (checked: boolean) => void;
	/** Greys the row out and blocks the switch. */
	disabled?: boolean;
}

export function SessionToggleRow({ label, description, checked, onCheckedChange, disabled = false }: SessionToggleRowProps) {
	return (
		<Stack
			direction="row"
			spacing={2}
			sx={{ px: 2, py: 1.5, alignItems: "center", opacity: disabled ? 0.6 : 1 }}
		>
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{label}
				</Typography>
				{description ? (
					<Typography variant="caption" color="text.secondary" component="p">
						{description}
					</Typography>
				) : null}
			</Box>
			<Switch
				checked={checked}
				disabled={disabled}
				slotProps={{ input: { "aria-label": label } }}
				onChange={(event) => onCheckedChange(event.target.checked)}
			/>
		</Stack>
	);
}
