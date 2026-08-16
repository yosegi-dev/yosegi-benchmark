import { Badge, NavLink, Stack } from "@mantine/core";

export interface WorkspaceNavDestination {
	id: string;
	label: string;
	/** Shown as a pill on the right of the row. */
	badge?: number;
}

export interface WorkspaceNavProps {
	destinations: WorkspaceNavDestination[];
	/** Id of the destination currently open. */
	activeId: string;
	onNavigate: (id: string) => void;
}

export function WorkspaceNav({ destinations, activeId, onNavigate }: WorkspaceNavProps) {
	return (
		<Stack gap={2}>
			{destinations.map((destination) => (
				<NavLink
					key={destination.id}
					label={destination.label}
					active={destination.id === activeId}
					variant="light"
					rightSection={
						destination.badge === undefined ? null : (
							<Badge size="xs" variant="filled">
								{destination.badge}
							</Badge>
						)
					}
					onClick={() => onNavigate(destination.id)}
				/>
			))}
		</Stack>
	);
}
