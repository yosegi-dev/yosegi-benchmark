import { Select } from "@mantine/core";

export interface TagFilterOption {
	value: string;
	label: string;
}

export interface TagFilterProps {
	label: string;
	options: TagFilterOption[];
	/** Value of the selected option, or an empty string for none. */
	value: string;
	onValueChange: (value: string) => void;
	/** Shows the clear button once a value is picked. */
	clearable?: boolean;
}

export function TagFilter({ label, options, value, onValueChange, clearable = true }: TagFilterProps) {
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
