import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { ReactElement, ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";

export interface PostAuthorLineProps {
	author: AuthorModel;
	/** Relative time since the post was published, already formatted, e.g. "2h". */
	label: string;
	/** Slot for the author's avatar. */
	avatar: ReactNode;
	/** When set, a small audience marker is shown after the timestamp. */
	visibility?: Visibility;
}

const VISIBILITY_MARKERS: Record<Visibility, { title: string; icon: ReactElement }> = {
	public: { title: "Everyone", icon: <PublicIcon sx={{ fontSize: 14 }} /> },
	followers: { title: "Followers", icon: <GroupIcon sx={{ fontSize: 14 }} /> },
	circle: { title: "Close circle", icon: <LockIcon sx={{ fontSize: 14 }} /> },
	unlisted: { title: "Unlisted", icon: <VisibilityOffIcon sx={{ fontSize: 14 }} /> },
};

export function PostAuthorLine({ author, label, avatar, visibility }: PostAuthorLineProps) {
	const marker = visibility ? VISIBILITY_MARKERS[visibility] : null;
	return (
		<Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
			{avatar}
			<Stack
				direction="row"
				spacing={0.75}
				sx={{ alignItems: "baseline", minWidth: 0, flexWrap: "wrap" }}
			>
				<Typography variant="subtitle2" sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>
					{author.displayName}
				</Typography>
				{author.verified ? (
					<VerifiedIcon color="primary" sx={{ fontSize: 16, alignSelf: "center" }} titleAccess="Verified" />
				) : null}
				<Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
					{author.handle}
				</Typography>
				<Typography variant="body2" color="text.secondary" aria-hidden>
					·
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
					{label}
				</Typography>
				{marker ? (
					<Tooltip title={marker.title}>
						<Box component="span" sx={{ display: "inline-flex", alignSelf: "center", color: "text.disabled" }}>
							{marker.icon}
						</Box>
					</Tooltip>
				) : null}
			</Stack>
		</Stack>
	);
}
