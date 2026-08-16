import { Table } from "@chakra-ui/react";

export interface ScheduleTableProps {
	/** Column keys and their headers, in display order. */
	columns: { key: string; label: string }[];
	/** One record per row, keyed by the column keys. */
	rows: Record<string, string>[];
	/** Rendered under the table as a caption. */
	caption?: string;
	/** Controls the cell padding. */
	size?: "sm" | "md" | "lg";
	/** Shades alternate rows. */
	striped?: boolean;
}

export function ScheduleTable({ columns, rows, caption, size = "md", striped = false }: ScheduleTableProps) {
	return (
		<Table.Root size={size} variant="line" striped={striped}>
			{caption ? <Table.Caption>{caption}</Table.Caption> : null}
			<Table.Header>
				<Table.Row>
					{columns.map((column) => (
						<Table.ColumnHeader key={column.key}>{column.label}</Table.ColumnHeader>
					))}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{rows.map((row, index) => (
					<Table.Row key={index}>
						{columns.map((column) => (
							<Table.Cell key={column.key}>{row[column.key]}</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	);
}
