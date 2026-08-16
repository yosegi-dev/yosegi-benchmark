import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface LegacyPostCardProps {
	/** Row key used by the old feed endpoint. */
	postId: string;
	displayName: string;
	handle: string;
	avatarUrl: string;
	/** Post text. */
	text: string;
	/** Pre-formatted timestamp. */
	time: string;
	replies: number;
	reposts: number;
	likes: number;
	/** True when the signed-in user has liked the post. */
	liked?: boolean;
	onClick?: () => void;
}

export function LegacyPostCard({
	postId,
	displayName,
	handle,
	avatarUrl,
	text,
	time,
	replies,
	reposts,
	likes,
	liked = false,
	onClick,
}: LegacyPostCardProps) {
	return (
		<Paper variant="outlined" data-post-id={postId} sx={{ p: 2, borderRadius: 2 }} onClick={onClick}>
			<Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
				<Avatar src={avatarUrl} alt={displayName} sx={{ width: 40, height: 40 }} />
				<Box sx={{ minWidth: 0, flex: 1 }}>
					<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
						{displayName}{" "}
						<Typography component="span" variant="body2" color="text.secondary">
							{handle} · {time}
						</Typography>
					</Typography>
					<Typography variant="body2" sx={{ whiteSpace: "pre-wrap", my: 0.5 }}>
						{text}
					</Typography>
					<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
						<Button size="small" color="inherit" startIcon={<ChatBubbleOutlineIcon fontSize="small" />}>
							{replies}
						</Button>
						<Button size="small" color="inherit" startIcon={<RepeatIcon fontSize="small" />}>
							{reposts}
						</Button>
						<Button
							size="small"
							color={liked ? "error" : "inherit"}
							startIcon={liked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
						>
							{likes}
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Paper>
	);
}
