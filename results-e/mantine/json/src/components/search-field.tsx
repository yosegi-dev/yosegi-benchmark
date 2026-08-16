import { TextInput } from "@mantine/core";
import type { Density } from "~/models";
import { controlSize } from "~/tokens";

export interface SearchFieldProps {
	/** Current query text. */
	value: string;
	placeholder?: string;
	/** Control size. */
	density?: Density;
	/** Fired on every keystroke with the next query text. */
	onQueryChange: (value: string) => void;
}

export function SearchField({
	value,
	placeholder = "Search",
	density = "cozy",
	onQueryChange,
}: SearchFieldProps) {
	return (
		<TextInput
			type="search"
			value={value}
			placeholder={placeholder}
			size={controlSize[density]}
			radius="xl"
			aria-label="Search"
			onChange={(event) => onQueryChange(event.currentTarget.value)}
		/>
	);
}
