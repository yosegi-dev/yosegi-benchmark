import { RadioGroup, Stack, Text } from "@chakra-ui/react";

export interface InviteChoiceGroupProps {
	/** Name of the invite choice. */
	label: string;
	/** Value of the option currently selected. */
	value: string;
	/** The options to offer, in display order. */
	options: { value: string; label: string }[];
	/** Fired with the value of the option that was picked. */
	onSelect: (value: string) => void;
}

export function InviteChoiceGroup({ label, value, options, onSelect }: InviteChoiceGroupProps) {
	return (
		<Stack gap="2">
			<Text fontWeight="medium">{label}</Text>
			<RadioGroup.Root
				value={value}
				size="sm"
				colorPalette="cyan"
				onValueChange={(details) => {
					if (details.value !== null) onSelect(details.value);
				}}
			>
				<Stack gap="2">
					{options.map((option) => (
						<RadioGroup.Item key={option.value} value={option.value}>
							<RadioGroup.ItemHiddenInput />
							<RadioGroup.ItemIndicator />
							<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
						</RadioGroup.Item>
					))}
				</Stack>
			</RadioGroup.Root>
		</Stack>
	);
}
