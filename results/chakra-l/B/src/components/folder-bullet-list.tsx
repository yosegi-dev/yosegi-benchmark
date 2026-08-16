import { List, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface FolderBulletListProps {
	/** The folder lines, in display order. */
	items: string[];
	/** Marker draws a bullet; plain leaves the line flush. */
	variant?: "marker" | "plain";
	/** Rendered under the list. */
	trailing?: ReactNode;
}

export function FolderBulletList({ items, variant = "marker", trailing }: FolderBulletListProps) {
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
