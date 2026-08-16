import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SelectChangeEvent } from "@mui/material/Select";

export interface NotificationFilterOption {
	value: string;
	label: string;
}

export interface NotificationFilterProps {
	/** Label drawn before the control. */
	label: string;
	/** The selected option value. */
	value: string;
	/** Options to choose from. */
	options: NotificationFilterOption[];
	/** Fired with the option value that was picked. */
	onValueChange: (value: string) => void;
	/** MUI control scale. */
	size?: "small" | "medium";
}

export function NotificationFilter({ label, value, options, onValueChange, size = "small" }: NotificationFilterProps) {
	return (
		<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
			<Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
				{label}
			</Typography>
			<Select<string>
				value={value}
				size={size}
				aria-label={label}
				onChange={(event: SelectChangeEvent<string>) => onValueChange(event.target.value)}
				sx={{ minWidth: 140, borderRadius: 2 }}
			>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</Stack>
	);
}
