import { Group, Paper, Text, ThemeIcon } from "@mantine/core";
import type { ReactNode } from "react";

const TONE_COLOR: Record<"info" | "tip" | "warning", string> = {
	info: "blue",
	tip: "grape",
	warning: "orange",
};

export interface WarningCalloutProps {
	title: string;
	/** The body of the callout. */
	children: ReactNode;
	/** Glyph shown in the disc; a dot is used when absent. */
	icon?: ReactNode;
	tone?: "info" | "tip" | "warning";
}

export function WarningCallout({ title, children, icon, tone = "info" }: WarningCalloutProps) {
	return (
		<Paper withBorder radius="md" p="sm">
			<Group gap="sm" wrap="nowrap" align="flex-start">
				<ThemeIcon variant="light" radius="xl" size="md" color={TONE_COLOR[tone]}>
					{icon ?? <Text size="xs">·</Text>}
				</ThemeIcon>
				<div>
					<Text fw={600} size="sm">
						{title}
					</Text>
					<Text size="sm" c="dimmed">
						{children}
					</Text>
				</div>
			</Group>
		</Paper>
	);
}
