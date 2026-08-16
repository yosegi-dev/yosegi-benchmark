import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RepeatIcon from "@mui/icons-material/Repeat";
import Button from "@mui/material/Button";
import type { ReactElement } from "react";
import { controlSize, toneColor } from "~/internal/tokens";
import type { ActionTone, Density } from "~/models";

export interface ActionButtonProps {
	/** Which timeline action this is; picks the icon and the palette. */
	tone: ActionTone;
	/** Accessible name for the control, e.g. "Reply". */
	label: string;
	/** Shown next to the icon; omit to render the icon alone. */
	count?: number;
	/** True when the viewer has already performed this action. */
	active?: boolean;
	/** Drives the control height. */
	density?: Density;
	onPress: () => void;
}

function icon(tone: ActionTone, active: boolean): ReactElement {
	switch (tone) {
		case "reply":
			return <ChatBubbleOutlineIcon fontSize="small" />;
		case "repost":
			return <RepeatIcon fontSize="small" />;
		case "like":
			return active ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />;
		default:
			return <MoreHorizIcon fontSize="small" />;
	}
}

function compact(count: number): string {
	if (count >= 1_000_000) {
		return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
	}
	if (count >= 1_000) {
		return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
	}
	return String(count);
}

export function ActionButton({ tone, label, count, active = false, density = "cozy", onPress }: ActionButtonProps) {
	const color = toneColor(tone);
	return (
		<Button
			variant="text"
			color={color}
			size={controlSize(density)}
			startIcon={icon(tone, active)}
			onClick={onPress}
			aria-label={label}
			aria-pressed={active}
			sx={{
				textTransform: "none",
				minWidth: 0,
				borderRadius: 999,
				fontWeight: active ? 700 : 400,
				color: active || color !== "inherit" ? undefined : "text.secondary",
				opacity: active ? 1 : 0.85,
			}}
		>
			{count === undefined ? null : compact(count)}
		</Button>
	);
}
