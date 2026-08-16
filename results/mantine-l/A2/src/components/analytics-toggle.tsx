import { Group, Switch } from "@mantine/core";

export interface AnalyticsToggleProps {
	/** What the switch controls. */
	label: string;
	/** Sentence under the label. */
	description?: string;
	enabled: boolean;
	/** Fired with the state the switch is moving to. */
	onEnabledChange: (enabled: boolean) => void;
	disabled?: boolean;
}

export function AnalyticsToggle({
	label,
	description = "",
	enabled,
	onEnabledChange,
	disabled = false,
}: AnalyticsToggleProps) {
	return (
		<Group justify="space-between" gap="md" wrap="nowrap" py="xs">
			<Switch
				checked={enabled}
				label={label}
				description={description === "" ? null : description}
				disabled={disabled}
				labelPosition="left"
				w="100%"
				styles={{ body: { justifyContent: "space-between" } }}
				onChange={(event) => onEnabledChange(event.currentTarget.checked)}
			/>
		</Group>
	);
}
