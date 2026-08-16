import { Alert } from "@mantine/core";

const SEVERITY_COLOR: Record<"info" | "success" | "warning" | "error", string> = {
	info: "blue",
	success: "green",
	warning: "yellow",
	error: "red",
};

export interface MaintenanceBannerProps {
	/** The sentence shown to the user. */
	message: string;
	/** Drives the colour of the banner. */
	severity: "info" | "success" | "warning" | "error";
	/** Bold line above the message. */
	title?: string;
	/** Shows the close button. */
	dismissible?: boolean;
	onDismiss?: () => void;
}

export function MaintenanceBanner({ message, severity, title = "", dismissible = false, onDismiss }: MaintenanceBannerProps) {
	return (
		<Alert
			variant="light"
			radius="md"
			color={SEVERITY_COLOR[severity]}
			title={title === "" ? null : title}
			withCloseButton={dismissible}
			onClose={onDismiss}
		>
			{message}
		</Alert>
	);
}
