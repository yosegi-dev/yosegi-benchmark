import { Card, Collapse, Divider, Group, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface DraftPanelProps {
	/** Panel title. */
	heading: string;
	/** Slot for the panel contents. */
	body: ReactNode;
	/** Slot for a control aligned with the heading. */
	action?: ReactNode;
	/** Hides the body behind the heading. */
	collapsed?: boolean;
	/** Inner spacing preset. */
	spacing?: "tight" | "normal" | "loose";
}

const PADDING: Record<"tight" | "normal" | "loose", string> = {
	tight: "xs",
	normal: "md",
	loose: "xl",
};

export function DraftPanel({ heading, body, action, collapsed = false, spacing = "normal" }: DraftPanelProps) {
	return (
		<Card component="section" withBorder radius="md" padding={PADDING[spacing]}>
			<Group justify="space-between" gap="xs" wrap="nowrap">
				<Text fw={700}>{heading}</Text>
				{action}
			</Group>
			<Divider my="sm" />
			<Collapse expanded={!collapsed}>{body}</Collapse>
		</Card>
	);
}
