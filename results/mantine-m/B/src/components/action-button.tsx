import { Button, Text } from "@mantine/core";
import type { ActionTone, Density } from "~/models";
import { controlSize, formatCount, toneColor } from "~/tokens";

export interface ActionButtonProps {
	/** Which action this is; picks the colour. */
	tone: ActionTone;
	/** Visible text of the button. */
	label: string;
	/** Shown after the label, abbreviated (1234 becomes "1.2K"). */
	count?: number;
	/** Renders the button in its engaged state, e.g. an already-liked post. */
	active?: boolean;
	/** Control size. */
	density?: Density;
	/** Fired when the button is activated. */
	onPress: () => void;
}

export function ActionButton({
	tone,
	label,
	count,
	active = false,
	density = "cozy",
	onPress,
}: ActionButtonProps) {
	return (
		<Button
			variant={active ? "light" : "subtle"}
			color={toneColor[tone]}
			size={controlSize[density]}
			radius="xl"
			aria-pressed={active}
			onClick={onPress}
			rightSection={
				count === undefined ? null : (
					<Text size="xs" c="dimmed" component="span">
						{formatCount(count)}
					</Text>
				)
			}
		>
			{label}
		</Button>
	);
}
