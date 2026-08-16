import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface PostCardCompactProps {
	author: AuthorModel;
	/** Post text, truncated to `maxLines`. */
	body: string;
	/** Pre-formatted timestamp shown after the handle. */
	timestamp: string;
	/** Overall scale of the row. */
	size?: "sm" | "md" | "lg";
	/** Lines of body text before truncation. */
	maxLines?: number;
	/** Rendered under the body, typically a footer or an action row. */
	children?: ReactNode;
	onClick?: () => void;
}

const AVATAR_PX = { sm: 24, md: 32, lg: 40 };

export function PostCardCompact({
	author,
	body,
	timestamp,
	size = "md",
	maxLines = 2,
	children,
	onClick,
}: PostCardCompactProps) {
	const px = AVATAR_PX[size];
	const content = (
		<Stack direction="row" spacing={1} sx={{ p: 1.25, alignItems: "flex-start" }}>
			<Avatar src={author.avatarUrl} alt={author.displayName} sx={{ width: px, height: px }} />
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Stack direction="row" spacing={0.5} sx={{ alignItems: "baseline", minWidth: 0 }}>
					<Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
						{author.displayName}
					</Typography>
					<Typography variant="caption" color="text.secondary" noWrap>
						{author.handle} · {timestamp}
					</Typography>
				</Stack>
				<Typography
					variant="body2"
					sx={{
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: maxLines,
						overflow: "hidden",
					}}
				>
					{body}
				</Typography>
				{children}
			</Box>
		</Stack>
	);

	return (
		<Card variant="outlined" sx={{ borderRadius: 2 }}>
			{onClick ? <CardActionArea onClick={onClick}>{content}</CardActionArea> : content}
		</Card>
	);
}
