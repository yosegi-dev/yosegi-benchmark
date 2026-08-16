import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import type { SyntheticEvent } from "react";

export interface FeedTabsLegacyTab {
	id: string;
	label: string;
	/** Drawn after the label when set. */
	badge?: number;
}

export interface FeedTabsLegacyProps {
	/** Tabs to draw; the caller owns the labels. */
	tabs: FeedTabsLegacyTab[];
	/** Id of the tab that is open. */
	selectedId: string;
	/** Fired with the id of the tab that was picked. */
	onSelect: (id: string) => void;
	/** Lets the strip scroll instead of dividing the width evenly. */
	scrollable?: boolean;
}

export function FeedTabsLegacy({ tabs, selectedId, onSelect, scrollable = false }: FeedTabsLegacyProps) {
	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Tabs
				value={selectedId}
				onChange={(_event: SyntheticEvent, id: string) => onSelect(id)}
				variant={scrollable ? "scrollable" : "fullWidth"}
				scrollButtons={scrollable ? "auto" : false}
			>
				{tabs.map((tab) => (
					<Tab
						key={tab.id}
						value={tab.id}
						label={tab.badge === undefined ? tab.label : `${tab.label} (${tab.badge})`}
						sx={{ textTransform: "none" }}
					/>
				))}
			</Tabs>
		</Box>
	);
}
