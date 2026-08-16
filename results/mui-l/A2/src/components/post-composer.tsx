import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import type { ChangeEvent, ReactNode } from "react";
import { UserAvatar } from "~/components/user-avatar";
import type { AuthorModel, Visibility } from "~/models";

export interface PostComposerProps {
	/** The signed-in user, shown beside the input. */
	viewer: AuthorModel;
	/** Current text of the post being written; the input is controlled. */
	draft: string;
	/** Audience the draft will be published to. */
	visibility: Visibility;
	/** Slot for the control that changes `visibility`. */
	visibilityPicker: ReactNode;
	onDraftChange: (draft: string) => void;
	onSubmitPress: () => void;
	/** Text on the submit button. */
	submitLabel?: string;
}

export function PostComposer({
	viewer,
	draft,
	visibility,
	visibilityPicker,
	onDraftChange,
	onSubmitPress,
	submitLabel = "Post",
}: PostComposerProps) {
	return (
		<Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
			<Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
				<UserAvatar author={viewer} />
				<Box sx={{ flex: 1, minWidth: 0 }}>
					<TextField
						value={draft}
						onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
							onDraftChange(event.target.value)
						}
						placeholder="What's happening?"
						variant="standard"
						fullWidth
						multiline
						minRows={2}
						slotProps={{
							input: { disableUnderline: true, sx: { fontSize: 18 } },
							htmlInput: { "aria-label": "Post text" },
						}}
					/>
					<Divider sx={{ my: 1.5 }} />
					<Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
						{visibilityPicker}
						<Button
							variant="contained"
							color="primary"
							disabled={draft.trim().length === 0}
							onClick={onSubmitPress}
							sx={{ ml: "auto", borderRadius: 999, textTransform: "none", fontWeight: 700, px: 3 }}
							data-visibility={visibility}
						>
							{submitLabel}
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Paper>
	);
}
