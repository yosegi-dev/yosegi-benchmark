import { Checkbox, Stack } from "@chakra-ui/react";

export interface CreatorChecklistProps {
	/** The creator options, in display order. */
	items: { id: string; label: string }[];
	/** Ids of the options currently ticked. */
	checkedIds: string[];
	/** Fired with the id of the option that was toggled. */
	onItemToggle: (id: string) => void;
	/** Controls the control size. */
	size?: "sm" | "md" | "lg";
}

export function CreatorChecklist({ items, checkedIds, onItemToggle, size = "md" }: CreatorChecklistProps) {
	return (
		<Stack gap="2">
			{items.map((item) => (
				<Checkbox.Root
					key={item.id}
					size={size}
					colorPalette="pink"
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
