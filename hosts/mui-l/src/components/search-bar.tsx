import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { type FormEvent, type ReactNode, useState } from "react";

export interface SearchBarProps {
	/** Starting query. The bar keeps its own state from there. */
	defaultValue?: string;
	/** Fired on submit, not on every keystroke. */
	onSearch: (query: string) => void;
	placeholder?: string;
	/** Controls drawn after the input, e.g. a filter menu. */
	children?: ReactNode;
	/** Removes the border so the bar can sit on a colored surface. */
	flush?: boolean;
}

export function SearchBar({
	defaultValue = "",
	onSearch,
	placeholder = "Search Yosegi",
	children,
	flush = false,
}: SearchBarProps) {
	const [query, setQuery] = useState(defaultValue);

	return (
		<Paper
			component="form"
			variant={flush ? "elevation" : "outlined"}
			elevation={0}
			onSubmit={(event: FormEvent<HTMLFormElement>) => {
				event.preventDefault();
				onSearch(query);
			}}
			sx={{ borderRadius: 999, px: 1.5, py: 0.5 }}
		>
			<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
				<IconButton type="submit" size="small" aria-label="Search">
					<SearchIcon fontSize="small" />
				</IconButton>
				<InputBase
					value={query}
					placeholder={placeholder}
					onChange={(event) => setQuery(event.target.value)}
					sx={{ flex: 1 }}
					inputProps={{ "aria-label": placeholder }}
				/>
				{children}
			</Stack>
		</Paper>
	);
}
