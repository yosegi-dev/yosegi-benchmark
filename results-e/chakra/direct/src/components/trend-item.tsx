import { Stack, Text, chakra } from "@chakra-ui/react";
import type { TrendModel } from "~/models";

export interface TrendItemProps {
	/** The trend this row describes. */
	trend: TrendModel;
	/** 1-based position in the panel, shown before the category. */
	rank: number;
	/** Fired when the row is activated. */
	onTrendPress?: () => void;
}

export function TrendItem({ trend, rank, onTrendPress }: TrendItemProps) {
	return (
		<chakra.button
			type="button"
			textAlign="start"
			width="full"
			px="2"
			py="2"
			borderRadius="l2"
			cursor="pointer"
			_hover={{ bg: "bg.emphasized" }}
			onClick={onTrendPress}
		>
			<Stack gap="0.5">
				<Text fontSize="xs" color="fg.muted">
					{rank}
					{trend.category ? ` · ${trend.category}` : ""}
				</Text>
				<Text fontWeight="semibold" truncate>
					{trend.label}
				</Text>
				<Text fontSize="xs" color="fg.muted">
					{trend.postCount.toLocaleString("en-US")} posts
				</Text>
			</Stack>
		</chakra.button>
	);
}
