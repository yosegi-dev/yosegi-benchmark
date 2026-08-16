import { HStack, Separator } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface RetryToolbarProps {
	/** The main retry controls. */
	primary: ReactNode;
	/** Controls pushed to the far side, after a divider. */
	secondary?: ReactNode;
	/** Where the toolbar sits along its row. */
	align?: "start" | "center" | "end";
	/** Draws a border and a background behind the row. */
	bordered?: boolean;
}

export function RetryToolbar({ primary, secondary, align = "start", bordered = true }: RetryToolbarProps) {
	return (
		<HStack
			gap="2"
			justify={align}
			px={bordered ? "3" : "0"}
			py={bordered ? "2" : "0"}
			bg={bordered ? "bg" : "transparent"}
			borderWidth={bordered ? "1px" : "0"}
			borderRadius="l2"
		>
			{primary}
			{secondary ? (
				<>
					<Separator orientation="vertical" height="5" />
					{secondary}
				</>
			) : null}
		</HStack>
	);
}
