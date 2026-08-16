import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AuthorModel } from "~/models";

export interface SuggestedUserPanelLegacyProps {
	/** Panel title. */
	title: string;
	/** Accounts to suggest; the panel renders the rows itself. */
	users: AuthorModel[];
	/** Ids the signed-in user already follows. */
	followedIds?: string[];
	/** Tightens the row padding. */
	compact?: boolean;
	/** Fired with the id of the account whose follow button was clicked. */
	onFollowClick?: (userId: string) => void;
}

export function SuggestedUserPanelLegacy({
	title,
	users,
	followedIds = [],
	compact = false,
	onFollowClick,
}: SuggestedUserPanelLegacyProps) {
	const pad = compact ? 1 : 1.5;
	return (
		<Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
			<Typography variant="subtitle1" sx={{ px: 2, py: 1.25, fontWeight: 700 }}>
				{title}
			</Typography>
			<Divider />
			<Stack divider={<Divider flexItem />}>
				{users.map((user) => {
					const following = followedIds.includes(user.id);
					return (
						<Stack key={user.id} direction="row" spacing={1.5} sx={{ px: 2, py: pad, alignItems: "center" }}>
							<Avatar src={user.avatarUrl} alt={user.displayName} sx={{ width: 36, height: 36 }} />
							<Box sx={{ minWidth: 0, flex: 1 }}>
								<Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
									{user.displayName}
								</Typography>
								<Typography variant="caption" color="text.secondary" noWrap component="p">
									{user.handle}
								</Typography>
							</Box>
							<Button
								size="small"
								variant={following ? "outlined" : "contained"}
								onClick={onFollowClick ? () => onFollowClick(user.id) : undefined}
								sx={{ borderRadius: 999, textTransform: "none" }}
							>
								{following ? "Following" : "Follow"}
							</Button>
						</Stack>
					);
				})}
			</Stack>
		</Paper>
	);
}
