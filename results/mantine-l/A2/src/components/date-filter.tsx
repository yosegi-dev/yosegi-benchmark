import { Select } from "@mantine/core";

export interface DateFilterOption {
	value: string;
	label: string;
}

export interface DateFilterProps {
	label: string;
	options: DateFilterOption[];
	/** Value of the selected option, or an empty string for none. */
	value: string;
	onValueChange: (value: string) => void;
	/** Shows the clear button once a value is picked. */
	clearable?: boolean;
}

export function DateFilter({ label, options, value, onValueChange, clearable = true }: DateFilterProps) {
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
