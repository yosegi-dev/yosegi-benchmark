import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { ReactElement } from "react";
import { chipSize } from "~/internal/tokens";
import type { Density, Visibility } from "~/models";

export interface VisibilityPickerProps {
	/** The audience currently selected. */
	visibility: Visibility;
	onVisibilityChange: (visibility: Visibility) => void;
	/** Drives the trigger height. */
	density?: Density;
}

const OPTIONS: { value: Visibility; label: string; icon: ReactElement }[] = [
	{ value: "public", label: "Everyone", icon: <PublicIcon fontSize="small" /> },
	{ value: "followers", label: "Followers", icon: <GroupIcon fontSize="small" /> },
	{ value: "circle", label: "Close circle", icon: <LockIcon fontSize="small" /> },
	{ value: "unlisted", label: "Unlisted", icon: <VisibilityOffIcon fontSize="small" /> },
];

export function VisibilityPicker({ visibility, onVisibilityChange, density = "cozy" }: VisibilityPickerProps) {
	return (
		<Select<Visibility>
			value={visibility}
			size={chipSize(density)}
			aria-label="Who can see this post"
			onChange={(event: SelectChangeEvent<Visibility>) => onVisibilityChange(event.target.value)}
			renderValue={(value) => {
				const option = OPTIONS.find((candidate) => candidate.value === value);
				return option ? option.label : value;
			}}
			sx={{ borderRadius: 999, minWidth: 168, "& .MuiSelect-select": { display: "flex", gap: 1 } }}
		>
			{OPTIONS.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					<ListItemIcon sx={{ minWidth: 32 }}>{option.icon}</ListItemIcon>
					<ListItemText primary={option.label} />
				</MenuItem>
			))}
		</Select>
	);
}
