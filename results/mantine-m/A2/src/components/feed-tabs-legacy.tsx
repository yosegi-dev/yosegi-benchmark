import { Tabs } from "@mantine/core";

export interface FeedTabsLegacyProps {
	/** Tabs to render, in order; the caller owns the labels. */
	tabs: { key: string; title: string }[];
	/** Key of the selected tab. */
	selected: string;
	/** Fired with the key of the tab that was selected. */
	onSelect: (key: string) => void;
	variant?: "default" | "outline" | "pills";
}

export function FeedTabsLegacy({ tabs, selected, onSelect, variant = "default" }: FeedTabsLegacyProps) {
	return (
		<Tabs
			value={selected}
			variant={variant}
			onChange={(value) => {
				if (value !== null) {
					onSelect(value);
				}
			}}
		>
			<Tabs.List>
				{tabs.map((tab) => (
					<Tabs.Tab key={tab.key} value={tab.key}>
						{tab.title}
					</Tabs.Tab>
				))}
			</Tabs.List>
		</Tabs>
	);
}
