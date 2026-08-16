import { Alert, Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface FeedbackBannerProps {
	/** Headline of the feedback notice. */
	title: string;
	/** Supporting sentence under the headline. */
	description?: string;
	/** Picks the icon and the colour of the banner. */
	status?: "info" | "warning" | "success" | "error";
	/** Rendered at the end of the banner — a link, a button, anything trailing. */
	action?: ReactNode;
	/** When set, a dismiss button is shown. */
	onDismiss?: () => void;
}

export function FeedbackBanner({ title, description, status = "info", action, onDismiss }: FeedbackBannerProps) {
	return (
		<Alert.Root status={status} variant="subtle" size="sm">
			<Alert.Indicator />
			<Alert.Content>
				<Alert.Title>{title}</Alert.Title>
				{description ? <Alert.Description>{description}</Alert.Description> : null}
			</Alert.Content>
			{action}
			{onDismiss ? (
				<Button size="xs" variant="plain" onClick={onDismiss}>
					Dismiss
				</Button>
			) : null}
		</Alert.Root>
	);
}
