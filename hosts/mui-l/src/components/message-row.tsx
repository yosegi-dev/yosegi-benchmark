import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface MessageRowItem {
	id: string;
	/** Headline of the row. */
	title: string;
	/** Second line, e.g. a handle or a timestamp. */
	detail: string;
	/** Leading image; the row falls back to text alignment without one. */
	avatarUrl?: string;
	/** Draws the row in the unread weight. */
	unread?: boolean;
}

export interface MessageRowProps {
	/** The record this row stands for. */
	item: MessageRowItem;
	/** Visual weight of the row. */
	emphasis?: "default" | "muted" | "strong";
	/** Drawn at the trailing edge, e.g. an overflow menu. */
	trailing?: ReactNode;
	/** True when this is the active row in its list. */
	selected?: boolean;
	/** Fired with the record id. */
	onSelect?: (id: string) => void;
}

export function MessageRow({ item, emphasis = "default", trailing, selected = false, onSelect }: MessageRowProps) {
	return (
		<ListItemButton
			selected={selected}
			onClick={onSelect ? () => onSelect(item.id) : undefined}
			sx={{ px: 2, py: 1.25, gap: 1.5, opacity: emphasis === "muted" ? 0.68 : 1 }}
		>
			{item.avatarUrl ? <Avatar src={item.avatarUrl} alt={item.title} sx={{ width: 36, height: 36 }} /> : null}
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Typography variant="body2" noWrap sx={{ fontWeight: emphasis === "strong" || item.unread ? 700 : 500 }}>
					{item.title}
				</Typography>
				<Typography variant="caption" color="text.secondary" component="p" noWrap>
					{item.detail}
				</Typography>
			</Box>
			<Stack direction="row" spacing={0.5} sx={{ alignItems: "center", flexShrink: 0 }}>
				{trailing}
			</Stack>
		</ListItemButton>
	);
}
