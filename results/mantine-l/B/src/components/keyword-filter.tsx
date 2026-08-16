import { Select } from "@mantine/core";

export interface KeywordFilterOption {
	value: string;
	label: string;
}

export interface KeywordFilterProps {
	label: string;
	options: KeywordFilterOption[];
	/** Value of the selected option, or an empty string for none. */
	value: string;
	onValueChange: (value: string) => void;
	/** Shows the clear button once a value is picked. */
	clearable?: boolean;
}

export function KeywordFilter({ label, options, value, onValueChange, clearable = true }: KeywordFilterProps) {
	return (
		<Select
			label={label}
			data={options}
			value={value === "" ? null : value}
			clearable={clearable}
			size="xs"
			radius="sm"
			onChange={(next) => onValueChange(next ?? "")}
		/>
	);
}
