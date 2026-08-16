import { Tabs } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ReviewTabsProps {
	/** The review panels, in display order. */
	panels: { value: string; label: string; content: ReactNode }[];
	/** Value of the panel currently shown. */
	activeValue: string;
	/** Fired with the value of the panel the user moved to. */
	onSelect: (value: string) => void;
	/** Controls the tab height. */
	size?: "sm" | "md" | "lg";
}

export function ReviewTabs({ panels, activeValue, onSelect, size = "md" }: ReviewTabsProps) {
	return (
		<Tabs.Root
			value={activeValue}
			size={size}
			variant="enclosed"
			onValueChange={(details) => onSelect(details.value)}
		>
			<Tabs.List>
				{panels.map((panel) => (
					<Tabs.Trigger key={panel.value} value={panel.value}>
						{panel.label}
					</Tabs.Trigger>
				))}
			</Tabs.List>
			{panels.map((panel) => (
				<Tabs.Content key={panel.value} value={panel.value}>
					{panel.content}
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}
