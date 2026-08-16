import { HStack, ProgressCircle, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface InviteGaugeProps {
	/** Name of the invite measure. */
	label: string;
	/** Current value, from 0 to 100. */
	value: number;
	/** Rendered under the label. */
	caption?: ReactNode;
	/** Controls the ring diameter. */
	size?: "xs" | "sm" | "md" | "lg";
}

export function InviteGauge({ label, value, caption, size = "md" }: InviteGaugeProps) {
	return (
		<HStack gap="3">
			<ProgressCircle.Root value={value} size={size} colorPalette="teal">
				<ProgressCircle.Circle>
					<ProgressCircle.Track />
					<ProgressCircle.Range />
				</ProgressCircle.Circle>
			</ProgressCircle.Root>
			<Stack gap="0">
				<Text fontWeight="medium">{label}</Text>
				{caption}
			</Stack>
		</HStack>
	);
}
