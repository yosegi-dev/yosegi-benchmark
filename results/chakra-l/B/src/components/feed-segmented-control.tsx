import { SegmentGroup } from "@chakra-ui/react";

export interface FeedSegmentedControlProps {
	/** The selected segment's value. */
	value: string;
	/** The segments to render, in order. */
	options: { value: string; label: string }[];
	/** Controls the control height. */
	size?: "xs" | "sm" | "md" | "lg";
	/** Fired with the value of the segment the user moved to. */
	onChange: (value: string) => void;
}

export function FeedSegmentedControl({
	value,
	options,
	size = "sm",
	onChange,
}: FeedSegmentedControlProps) {
	return (
		<SegmentGroup.Root
			value={value}
			size={size}
			onValueChange={(details) => {
				if (details.value !== null) onChange(details.value);
			}}
		>
			<SegmentGroup.Indicator />
			<SegmentGroup.Items items={options} />
		</SegmentGroup.Root>
	);
}
