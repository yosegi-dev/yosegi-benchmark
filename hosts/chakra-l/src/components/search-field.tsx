import { Icon, Input, InputGroup } from "@chakra-ui/react";
import type { Density } from "~/models";

const fieldSize = {
	compact: "sm",
	cozy: "md",
	roomy: "lg",
} as const;

export interface SearchFieldProps {
	/** The current query text; the field is fully controlled. */
	value: string;
	placeholder?: string;
	/** Controls the input height. */
	density?: Density;
	/** Fired with the next query text on every keystroke. */
	onQueryChange: (value: string) => void;
}

export function SearchField({
	value,
	placeholder = "Search",
	density = "cozy",
	onQueryChange,
}: SearchFieldProps) {
	return (
		<InputGroup
			startElement={
				<Icon color="fg.muted" viewBox="0 0 24 24" boxSize="4">
					<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
					<path
						d="m16.5 16.5 4 4"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</Icon>
			}
		>
			<Input
				type="search"
				role="searchbox"
				value={value}
				placeholder={placeholder}
				size={fieldSize[density]}
				variant="subtle"
				borderRadius="full"
				onChange={(event) => onQueryChange(event.currentTarget.value)}
			/>
		</InputGroup>
	);
}
