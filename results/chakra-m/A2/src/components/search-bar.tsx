import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import type { ReactNode } from "react";

export interface SearchBarProps {
	/** Initial query text; the bar keeps its own state from there. */
	defaultValue?: string;
	/** Shown in the empty field. */
	placeholder?: string;
	/** Fired with the query when the form is submitted, not on every keystroke. */
	onSearch: (value: string) => void;
	/** Rendered after the submit button — filters, scope pickers, and the like. */
	children?: ReactNode;
}

export function SearchBar({
	defaultValue = "",
	placeholder = "Search posts and people",
	onSearch,
	children,
}: SearchBarProps) {
	const [value, setValue] = useState(defaultValue);
	return (
		<HStack
			as="form"
			gap="2"
			onSubmit={(event) => {
				event.preventDefault();
				onSearch(value);
			}}
		>
			<Input
				type="search"
				value={value}
				placeholder={placeholder}
				size="md"
				variant="outline"
				borderRadius="full"
				onChange={(event) => setValue(event.currentTarget.value)}
			/>
			<Button type="submit" size="md" variant="solid" borderRadius="full">
				Search
			</Button>
			{children}
		</HStack>
	);
}
