import { Field, Input } from "@chakra-ui/react";

export interface SearchFieldCompactProps {
	/** The current query text; the field is fully controlled. */
	query: string;
	/** Controls the input height. */
	size?: "xs" | "sm" | "md";
	/** Rendered under the field in muted text. */
	hint?: string;
	/** Fired with the next query text on every keystroke. */
	onChange: (query: string) => void;
}

export function SearchFieldCompact({ query, size = "sm", hint, onChange }: SearchFieldCompactProps) {
	return (
		<Field.Root>
			<Input
				type="search"
				value={query}
				placeholder="Search"
				size={size}
				variant="subtle"
				borderRadius="full"
				onChange={(event) => onChange(event.currentTarget.value)}
			/>
			{hint ? <Field.HelperText>{hint}</Field.HelperText> : null}
		</Field.Root>
	);
}
