import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";

export interface PostComposerCompactProps {
	/** Avatar image for the signed-in user. */
	avatarUrl: string;
	/** Current text; the field is controlled. */
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
	placeholder?: string;
	/** Text on the submit button. */
	buttonLabel?: string;
	/** Overall scale of the row. */
	size?: "sm" | "md";
}

export function PostComposerCompact({
	avatarUrl,
	value,
	onChange,
	onSubmit,
	placeholder = "Say something",
	buttonLabel = "Send",
	size = "md",
}: PostComposerCompactProps) {
	const px = size === "sm" ? 28 : 36;
	return (
		<Stack direction="row" spacing={1} sx={{ alignItems: "center", p: 1 }}>
			<Avatar src={avatarUrl} sx={{ width: px, height: px }} />
			<TextField
				value={value}
				placeholder={placeholder}
				size="small"
				fullWidth
				onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(event.target.value)}
				slotProps={{ input: { sx: { borderRadius: 999 } }, htmlInput: { "aria-label": placeholder } }}
			/>
			<Button
				variant="contained"
				size="small"
				disabled={value.trim().length === 0}
				onClick={onSubmit}
				sx={{ borderRadius: 999, textTransform: "none", flexShrink: 0 }}
			>
				{buttonLabel}
			</Button>
		</Stack>
	);
}
