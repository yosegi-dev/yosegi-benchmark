import { Menu } from "@mantine/core";
import type { ReactNode } from "react";

export interface CollectionMenuOption {
	id: string;
	label: string;
	/** Renders the option in the destructive colour. */
	danger?: boolean;
}

export interface CollectionMenuProps {
	options: CollectionMenuOption[];
	/** Slot for the element that opens the menu. */
	trigger: ReactNode;
	/** Fired with the id of the option that was chosen. */
	onSelectOption: (id: string) => void;
	position?: "bottom-end" | "bottom-start";
}

export function CollectionMenu({ options, trigger, onSelectOption, position = "bottom-end" }: CollectionMenuProps) {
	return (
		<Menu position={position} shadow="md" width={220} withinPortal>
			<Menu.Target>{trigger}</Menu.Target>
			<Menu.Dropdown>
				{options.map((option) => (
					<Menu.Item
						key={option.id}
						color={option.danger === true ? "red" : "gray"}
						onClick={() => onSelectOption(option.id)}
					>
						{option.label}
					</Menu.Item>
				))}
			</Menu.Dropdown>
		</Menu>
	);
}
