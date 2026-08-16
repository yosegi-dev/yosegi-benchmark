import { Divider, Stack, Text, UnstyledButton } from "@mantine/core";
import { Fragment } from "react";

export interface DeviceListEntry {
	id: string;
	primary: string;
	secondary?: string;
}

export interface DeviceListProps {
	entries: DeviceListEntry[];
	/** Shown in place of the list when it is empty. */
	emptyLabel?: string;
	/** Draws a rule between entries. */
	dividers?: boolean;
	onEntrySelect?: (id: string) => void;
}

export function DeviceList({
	entries,
	emptyLabel = "Nothing here yet",
	dividers = true,
	onEntrySelect,
}: DeviceListProps) {
	if (entries.length === 0) {
		return (
			<Text size="sm" c="dimmed" py="md" ta="center">
				{emptyLabel}
			</Text>
		);
	}

	return (
		<Stack gap={0}>
			{entries.map((entry, index) => (
				<Fragment key={entry.id}>
					{dividers && index > 0 ? <Divider /> : null}
					<UnstyledButton py="xs" onClick={() => onEntrySelect?.(entry.id)}>
						<Text size="sm">{entry.primary}</Text>
						{entry.secondary === undefined ? null : (
							<Text size="xs" c="dimmed">
								{entry.secondary}
							</Text>
						)}
					</UnstyledButton>
				</Fragment>
			))}
		</Stack>
	);
}
