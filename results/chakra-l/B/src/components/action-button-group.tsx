import { Group } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ActionButtonGroupProps {
	/** The buttons to group, in order. */
	children: ReactNode;
	/** Controls the gap when the buttons are not attached. */
	size?: "sm" | "md" | "lg";
	/** Removes the gap and merges the adjacent corners. */
	attached?: boolean;
}

const groupGap = {
	sm: "1",
	md: "2",
	lg: "3",
} as const;

export function ActionButtonGroup({ children, size = "md", attached = false }: ActionButtonGroupProps) {
	return (
		<Group attached={attached} gap={attached ? "0" : groupGap[size]}>
			{children}
		</Group>
	);
}
