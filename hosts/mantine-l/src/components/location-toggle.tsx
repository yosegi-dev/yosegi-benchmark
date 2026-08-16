import { Group, Switch } from "@mantine/core";

export interface LocationToggleProps {
	/** What the switch controls. */
	label: string;
	/** Sentence under the label. */
	description?: string;
	enabled: boolean;
	/** Fired with the state the switch is moving to. */
	onEnabledChange: (enabled: boolean) => void;
	disabled?: boolean;
}

export function LocationToggle({
	label,
	description = "",
	enabled,
	onEnabledChange,
	disabled = false,
}: LocationToggleProps) {
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
