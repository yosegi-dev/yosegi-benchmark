import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { ChangeEvent, ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface ReplyComposerProps {
	/** The account being replied to, named above the field. */
	replyingTo: AuthorModel;
	/** Current reply text; the field is controlled. */
	text: string;
	onTextChange: (text: string) => void;
	onSend: () => void;
	/** Characters allowed; the counter turns red past it. */
	maxLength?: number;
	/** Controls drawn on the left of the send button. */
	children?: ReactNode;
}

export function ReplyComposer({
	replyingTo,
	text,
	onTextChange,
	onSend,
	maxLength = 280,
	children,
}: ReplyComposerProps) {
	const over = text.length > maxLength;
	return (
		<Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
			<Typography variant="caption" color="text.secondary">
				Replying to {replyingTo.handle}
			</Typography>
			<TextField
				value={text}
				onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onTextChange(event.target.value)}
				placeholder="Post your reply"
				variant="standard"
				fullWidth
				multiline
				minRows={2}
				error={over}
				slotProps={{ input: { disableUnderline: true }, htmlInput: { "aria-label": "Reply text" } }}
			/>
			<Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 1 }}>
				{children}
				<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
					<Typography variant="caption" color={over ? "error" : "text.secondary"}>
						{text.length}/{maxLength}
					</Typography>
					<Button
						variant="contained"
						size="small"
						disabled={over || text.trim().length === 0}
						onClick={onSend}
						sx={{ borderRadius: 999, textTransform: "none" }}
					>
						Reply
					</Button>
				</Box>
			</Stack>
		</Paper>
	);
}
