import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import type { SyntheticEvent } from "react";
import { controlSize } from "~/internal/tokens";
import type { Density, FeedKind } from "~/models";

export interface FeedTabsProps {
	/** The feed currently shown; the labels are owned by this component. */
	activeFeed: FeedKind;
	onFeedChange: (feed: FeedKind) => void;
	/** Drives the tab height. */
	density?: Density;
}

const FEEDS: { kind: FeedKind; label: string }[] = [
	{ kind: "for-you", label: "For you" },
	{ kind: "following", label: "Following" },
	{ kind: "list", label: "Lists" },
];

export function FeedTabs({ activeFeed, onFeedChange, density = "cozy" }: FeedTabsProps) {
	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Tabs
				value={activeFeed}
				onChange={(_event: SyntheticEvent, feed: FeedKind) => onFeedChange(feed)}
				variant="fullWidth"
				textColor="primary"
				indicatorColor="primary"
				aria-label="Feed"
			>
				{FEEDS.map((feed) => (
					<Tab
						key={feed.kind}
						value={feed.kind}
						label={feed.label}
						sx={{
							textTransform: "none",
							fontWeight: 600,
							minHeight: controlSize(density) === "small" ? 40 : controlSize(density) === "large" ? 64 : 48,
						}}
					/>
				))}
			</Tabs>
		</Box>
	);
}
