import { EmptyState, Icon } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ExportEmptyStateProps {
	/** Headline shown when there is no export to display. */
	title: string;
	/** One line telling the reader what to do about it. */
	description?: string;
	/** Rendered under the description — usually a call to action. */
	action?: ReactNode;
	/** Controls the spacing and the icon size. */
	size?: "sm" | "md" | "lg";
}

export function ExportEmptyState({ title, description, action, size = "md" }: ExportEmptyStateProps) {
	return (
		<EmptyState.Root size={size}>
			<EmptyState.Content>
				<EmptyState.Indicator>
					<Icon viewBox="0 0 24 24" boxSize="8">
						<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
						<path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
					</Icon>
				</EmptyState.Indicator>
				<EmptyState.Title>{title}</EmptyState.Title>
				{description ? <EmptyState.Description>{description}</EmptyState.Description> : null}
				{action}
			</EmptyState.Content>
		</EmptyState.Root>
	);
}
