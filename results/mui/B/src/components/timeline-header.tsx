import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { UserAvatar } from "~/components/user-avatar";
import type { AuthorModel } from "~/models";

export interface TimelineHeaderProps {
	/** The signed-in user, shown at the left edge. */
	viewer: AuthorModel;
	/** Slot for the search control. */
	search: ReactNode;
	/** Slot for the notification control. */
	notifications: ReactNode;
	/** Fired when the viewer's avatar is activated. */
	onViewerPress?: () => void;
}

export function TimelineHeader({ viewer, search, notifications, onViewerPress }: TimelineHeaderProps) {
	return (
		<Container maxWidth="lg">
			<Toolbar disableGutters sx={{ gap: 2 }}>
				<ButtonBase
					onClick={onViewerPress}
					aria-label={`${viewer.displayName} (${viewer.handle})`}
					sx={{ borderRadius: "50%" }}
				>
					<UserAvatar author={viewer} density="compact" />
				</ButtonBase>
				<Typography variant="h6" component="h1" sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>
					Timeline
				</Typography>
				<Box sx={{ flex: 1, minWidth: 0, maxWidth: 420 }}>{search}</Box>
				<Stack direction="row" spacing={1} sx={{ ml: "auto", alignItems: "center" }}>
					{notifications}
				</Stack>
			</Toolbar>
		</Container>
	);
}
