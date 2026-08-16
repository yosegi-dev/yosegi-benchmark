import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";

export interface SearchFieldCompactProps {
	/** Current query text. */
	query: string;
	/** Fired with the raw DOM event, not the value. */
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	/** Placeholder text. */
	hint?: string;
	/** Overall scale of the input. */
	size?: "sm" | "md";
	/** Draws the field in a filled variant for use on a toolbar. */
	filled?: boolean;
	autoFocus?: boolean;
}

export function SearchFieldCompact({
	query,
	onChange,
	hint = "Search",
	size = "sm",
	filled = false,
	autoFocus = false,
}: SearchFieldCompactProps) {
	return (
		<TextField
			value={query}
			onChange={onChange}
			placeholder={hint}
			autoFocus={autoFocus}
			size={size === "sm" ? "small" : "medium"}
			variant={filled ? "filled" : "outlined"}
			fullWidth
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon fontSize="small" />
						</InputAdornment>
					),
				},
				htmlInput: { "aria-label": hint },
			}}
		/>
	);
}
