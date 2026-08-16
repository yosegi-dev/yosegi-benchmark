import { HStack, Stack, Switch, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface RuleSettingRowProps {
	/** Name of the rule setting. */
	label: string;
	/** One line explaining what turning it on does. */
	description?: string;
	/** Current state of the switch. */
	enabled: boolean;
	/** Fired with the state the switch is moving to. */
	onToggle: (enabled: boolean) => void;
	/** Rendered next to the label — a "new" tag, a plan requirement, and the like. */
	badge?: ReactNode;
}

export function RuleSettingRow({ label, description, enabled, onToggle, badge }: RuleSettingRowProps) {
	return (
		<HStack justify="space-between" align="start" gap="4" py="2">
			<Stack gap="0.5" minW="0">
				<HStack gap="2">
					<Text fontWeight="medium">{label}</Text>
					{badge}
				</HStack>
				{description ? (
					<Text fontSize="sm" color="fg.muted">
						{description}
					</Text>
				) : null}
			</Stack>
			<Switch.Root
				checked={enabled}
				size="md"
				onCheckedChange={(details) => onToggle(details.checked)}
			>
				<Switch.HiddenInput />
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
			</Switch.Root>
		</HStack>
	);
}
