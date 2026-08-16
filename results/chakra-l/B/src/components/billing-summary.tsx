import { DataList, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface BillingSummaryProps {
	/** The billing facts, in display order. */
	rows: { label: string; value: string }[];
	/** Stacks the label above the value when vertical. */
	orientation?: "horizontal" | "vertical";
	/** Rendered under the list. */
	footer?: ReactNode;
	/** Controls the row height. */
	size?: "sm" | "md" | "lg";
}

export function BillingSummary({ rows, orientation = "horizontal", footer, size = "md" }: BillingSummaryProps) {
	return (
		<Stack gap="3">
			<DataList.Root orientation={orientation} size={size}>
				{rows.map((row) => (
					<DataList.Item key={row.label}>
						<DataList.ItemLabel>{row.label}</DataList.ItemLabel>
						<DataList.ItemValue>{row.value}</DataList.ItemValue>
					</DataList.Item>
				))}
			</DataList.Root>
			{footer}
		</Stack>
	);
}
