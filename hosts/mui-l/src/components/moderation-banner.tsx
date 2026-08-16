import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import type { ReactNode } from "react";

export interface ModerationBannerProps {
	/** Body copy. */
	message: string;
	/** Bold line above the message. */
	title?: string;
	/** Severity the banner is drawn at. */
	severity?: "info" | "success" | "warning" | "error";
	/** Drawn at the trailing edge, e.g. a button. */
	action?: ReactNode;
	/** Shows a close button when set. */
	onDismiss?: () => void;
}

export function ModerationBanner({ message, title, severity = "info", action, onDismiss }: ModerationBannerProps) {
	return (
		<Alert severity={severity} variant="outlined" action={action} onClose={onDismiss} sx={{ borderRadius: 2 }}>
			{title ? <AlertTitle>{title}</AlertTitle> : null}
			{message}
		</Alert>
	);
}
