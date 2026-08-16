import { Tabs, TabsList, TabsTrigger } from "~/ui/tabs";

export interface FeedTabsLegacyTab {
	id: string;
	label: string;
}

export interface FeedTabsLegacyProps {
	/** The id of the selected tab. */
	value: string;
	/** Tabs and their labels, supplied by the caller. */
	tabs: FeedTabsLegacyTab[];
	onChange: (value: string) => void;
}

export function FeedTabsLegacy({ value, tabs, onChange }: FeedTabsLegacyProps) {
	return (
		<Tabs value={value} onValueChange={onChange} className="w-full">
			<TabsList className="w-full">
				{tabs.map((tab) => (
					<TabsTrigger key={tab.id} value={tab.id} className="flex-1">
						{tab.label}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	);
}
