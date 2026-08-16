import VerifiedIcon from "@mui/icons-material/Verified";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface SuggestedUserRowProps {
	author: AuthorModel;
	/** Slot for the author's avatar. */
	avatar: ReactNode;
	/** Slot for the follow control. */
	follow: ReactNode;
	/** Why this account is being suggested, e.g. "Followed by Rin". */
	reason?: string;
}

export function SuggestedUserRow({ author, avatar, follow, reason }: SuggestedUserRowProps) {
	return (
		<Stack direction="row" spacing={1.5} sx={{ px: 2, py: 1.25, alignItems: "center" }}>
			{avatar}
			<Box sx={{ minWidth: 0, flex: 1 }}>
				<Stack direction="row" spacing={0.5} sx={{ minWidth: 0, alignItems: "center" }}>
					<Typography variant="subtitle2" sx={{ fontWeight: 700 }} noWrap>
						{author.displayName}
					</Typography>
					{author.verified ? (
						<VerifiedIcon color="primary" sx={{ fontSize: 15 }} titleAccess="Verified" />
					) : null}
				</Stack>
				<Typography variant="caption" color="text.secondary" component="p" noWrap>
					{author.handle}
				</Typography>
				{reason ? (
					<Typography variant="caption" color="text.disabled" component="p" noWrap>
						{reason}
					</Typography>
				) : null}
			</Box>
			<Box sx={{ flexShrink: 0 }}>{follow}</Box>
		</Stack>
	);
}
