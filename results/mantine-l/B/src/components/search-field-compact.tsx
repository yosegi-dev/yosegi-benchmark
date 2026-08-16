import { TextInput } from "@mantine/core";

export interface SearchFieldCompactProps {
	/** Current query text. */
	value: string;
	onChange: (value: string) => void;
	size?: "xs" | "sm";
	disabled?: boolean;
}

export function SearchFieldCompact({
	value,
	onChange,
	size = "xs",
	disabled = false,
}: SearchFieldCompactProps) {
	return (
		<TextInput
			type="search"
			size={size}
			radius="xl"
			value={value}
			disabled={disabled}
			placeholder="Search"
			aria-label="Search"
			onChange={(event) => onChange(event.currentTarget.value)}
		/>
	);
}
