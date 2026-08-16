import { Tabs } from "@chakra-ui/react";

export interface FeedTabsLegacyProps {
	/** The tabs to render, in order; the caller owns the labels. */
	tabs: { id: string; label: string }[];
	/** Position of the active tab in `tabs`. */
	selectedIndex: number;
	/** Fired with the position of the tab the user moved to. */
	onChange: (index: number) => void;
}

export function FeedTabsLegacy({ tabs, selectedIndex, onChange }: FeedTabsLegacyProps) {
	const active = tabs[selectedIndex]?.id ?? tabs[0]?.id ?? "";
	return (
		<Tabs.Root
			value={active}
			variant="line"
			size="md"
			onValueChange={(details) => {
				const next = tabs.findIndex((tab) => tab.id === details.value);
				if (next >= 0) onChange(next);
			}}
		>
			<Tabs.List>
				{tabs.map((tab) => (
					<Tabs.Trigger key={tab.id} value={tab.id}>
						{tab.label}
					</Tabs.Trigger>
				))}
			</Tabs.List>
		</Tabs.Root>
	);
}
