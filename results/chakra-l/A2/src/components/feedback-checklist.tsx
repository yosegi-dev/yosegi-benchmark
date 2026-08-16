import { Checkbox, Stack } from "@chakra-ui/react";

export interface FeedbackChecklistProps {
	/** The feedback options, in display order. */
	items: { id: string; label: string }[];
	/** Ids of the options currently ticked. */
	checkedIds: string[];
	/** Fired with the id of the option that was toggled. */
	onItemToggle: (id: string) => void;
	/** Controls the control size. */
	size?: "sm" | "md" | "lg";
}

export function FeedbackChecklist({ items, checkedIds, onItemToggle, size = "md" }: FeedbackChecklistProps) {
	return (
		<Stack gap="2">
			{items.map((item) => (
				<Checkbox.Root
					key={item.id}
					size={size}
					colorPalette="teal"
					checked={checkedIds.includes(item.id)}
					onCheckedChange={() => onItemToggle(item.id)}
				>
					<Checkbox.HiddenInput />
					<Checkbox.Control>
						<Checkbox.Indicator />
					</Checkbox.Control>
					<Checkbox.Label>{item.label}</Checkbox.Label>
				</Checkbox.Root>
			))}
		</Stack>
	);
}
