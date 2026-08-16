import { SegmentedControl } from "@mantine/core";

export interface FeedSegmentedControlProps {
	/** Value of the selected segment. */
	value: string;
	/** The segments, in order. */
	options: { value: string; label: string }[];
	onChange: (value: string) => void;
	fullWidth?: boolean;
}

export function FeedSegmentedControl({
	value,
	options,
	onChange,
	fullWidth = true,
}: FeedSegmentedControlProps) {
	return (
		<SegmentedControl
			value={value}
			data={options}
			fullWidth={fullWidth}
			radius="xl"
			onChange={onChange}
		/>
	);
}
