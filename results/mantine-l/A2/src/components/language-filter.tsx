import { Select } from "@mantine/core";

export interface LanguageFilterOption {
	value: string;
	label: string;
}

export interface LanguageFilterProps {
	label: string;
	options: LanguageFilterOption[];
	/** Value of the selected option, or an empty string for none. */
	value: string;
	onValueChange: (value: string) => void;
	/** Shows the clear button once a value is picked. */
	clearable?: boolean;
}

export function LanguageFilter({ label, options, value, onValueChange, clearable = true }: LanguageFilterProps) {
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
