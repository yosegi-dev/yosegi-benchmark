import { Box, Button, Collapsible } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface MaintenanceDisclosureProps {
	/** Label of the trigger that reveals the maintenance detail. */
	title: string;
	/** Revealed when the disclosure is open. */
	children: ReactNode;
	/** Starts the disclosure open. */
	defaultOpen?: boolean;
}

export function MaintenanceDisclosure({ title, children, defaultOpen = false }: MaintenanceDisclosureProps) {
	return (
		<Collapsible.Root defaultOpen={defaultOpen}>
			<Collapsible.Trigger asChild>
				<Button size="sm" variant="ghost" width="full" justifyContent="start">
					{title}
				</Button>
			</Collapsible.Trigger>
			<Collapsible.Content>
				<Box px="3" py="2">
					{children}
				</Box>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
