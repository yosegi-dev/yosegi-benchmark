import { Button, Group } from "@mantine/core";

export interface ActionButtonGroupProps {
	/** The buttons to render, left to right. */
	actions: { id: string; label: string; count?: number }[];
	size?: "sm" | "md";
	/** Fired with the id of the button that was clicked. */
	onAction: (id: string) => void;
	/** Stretches the buttons to fill the row. */
	fullWidth?: boolean;
}

export function ActionButtonGroup({
	actions,
	size = "sm",
	onAction,
	fullWidth = false,
}: ActionButtonGroupProps) {
	return (
		<Button.Group>
			{actions.map((action) => (
				<Button
					key={action.id}
					variant="default"
					size={size}
					flex={fullWidth ? 1 : 0}
					onClick={() => onAction(action.id)}
				>
					<Group gap={6} wrap="nowrap">
						{action.label}
						{action.count === undefined ? null : action.count}
					</Group>
				</Button>
			))}
		</Button.Group>
	);
}
