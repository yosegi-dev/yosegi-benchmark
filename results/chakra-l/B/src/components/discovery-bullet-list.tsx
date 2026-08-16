import { List, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface DiscoveryBulletListProps {
	/** The discovery lines, in display order. */
	items: string[];
	/** Marker draws a bullet; plain leaves the line flush. */
	variant?: "marker" | "plain";
	/** Rendered under the list. */
	trailing?: ReactNode;
}

export function DiscoveryBulletList({ items, variant = "marker", trailing }: DiscoveryBulletListProps) {
	return (
		<Stack gap="2">
			<List.Root variant={variant} gap="1">
				{items.map((item) => (
					<List.Item key={item}>{item}</List.Item>
				))}
			</List.Root>
			{trailing}
		</Stack>
	);
}
