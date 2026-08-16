import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";
import { chipSize } from "~/internal/tokens";
import type { Density } from "~/models";

export interface SearchFieldProps {
	/** Current query text; the field is controlled. */
	value: string;
	placeholder?: string;
	/** Drives the input height. */
	density?: Density;
	/** Fired with the next query on every keystroke. */
	onQueryChange: (value: string) => void;
}

export function SearchField({
	value,
	placeholder = "Search",
	density = "cozy",
	onQueryChange,
}: SearchFieldProps) {
	return (
		<TextField
			value={value}
			placeholder={placeholder}
			size={chipSize(density)}
			fullWidth
			variant="outlined"
			type="search"
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon fontSize="small" />
						</InputAdornment>
					),
					sx: { borderRadius: 999 },
				},
				htmlInput: { "aria-label": placeholder },
			}}
			onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
				onQueryChange(event.target.value)
			}
		/>
	);
}
