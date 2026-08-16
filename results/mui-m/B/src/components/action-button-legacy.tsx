import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import Button from "@mui/material/Button";
import type { ReactElement } from "react";

export interface ActionButtonLegacyProps {
	/** Action name as the v1 feed API spelled it. */
	kind: "comment" | "retweet" | "favorite";
	/** Count shown after the icon. */
	total: number;
	/** True when the signed-in user has already performed the action. */
	highlighted?: boolean;
	/** MUI button scale. */
	size?: "small" | "medium";
	onClick: () => void;
}

const LABELS = { comment: "Comment", retweet: "Retweet", favorite: "Favorite" };

function glyph(kind: ActionButtonLegacyProps["kind"], highlighted: boolean): ReactElement {
	if (kind === "comment") {
		return <ChatBubbleOutlineIcon fontSize="small" />;
	}
	if (kind === "retweet") {
		return <RepeatIcon fontSize="small" />;
	}
	return highlighted ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />;
}

export function ActionButtonLegacy({
	kind,
	total,
	highlighted = false,
	size = "small",
	onClick,
}: ActionButtonLegacyProps) {
	return (
		<Button
			size={size}
			variant="text"
			color={highlighted ? "primary" : "inherit"}
			startIcon={glyph(kind, highlighted)}
			aria-label={LABELS[kind]}
			onClick={onClick}
			sx={{ textTransform: "none", minWidth: 0, color: highlighted ? undefined : "text.secondary" }}
		>
			{total}
		</Button>
	);
}
