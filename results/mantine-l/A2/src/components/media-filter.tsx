import { Select } from "@mantine/core";

export interface MediaFilterOption {
	value: string;
	label: string;
}

export interface MediaFilterProps {
	label: string;
	options: MediaFilterOption[];
	/** Value of the selected option, or an empty string for none. */
	value: string;
	onValueChange: (value: string) => void;
	/** Shows the clear button once a value is picked. */
	clearable?: boolean;
}

export function MediaFilter({ label, options, value, onValueChange, clearable = true }: MediaFilterProps) {
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
