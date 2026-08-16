import { Slider } from "@chakra-ui/react";

export interface SuggestionRangeProps {
	/** Name of the suggestion setting. */
	label: string;
	/** Current value, between `min` and `max`. */
	value: number;
	/** Lower bound of the track. */
	min?: number;
	/** Upper bound of the track. */
	max?: number;
	/** Fired with the value the thumb landed on. */
	onRangeChange: (value: number) => void;
}

export function SuggestionRange({ label, value, min = 0, max = 100, onRangeChange }: SuggestionRangeProps) {
	return (
		<Slider.Root
			value={[value]}
			min={min}
			max={max}
			size="sm"
			colorPalette="orange"
			onValueChange={(details) => onRangeChange(details.value[0] ?? min)}
		>
			<Slider.Label>{label}</Slider.Label>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumbs />
			</Slider.Control>
		</Slider.Root>
	);
}
