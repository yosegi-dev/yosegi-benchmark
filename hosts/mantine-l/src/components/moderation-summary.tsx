import { List, Paper, Text } from "@mantine/core";

const TONE_COLOR: Record<"neutral" | "positive" | "negative", string> = {
	neutral: "gray",
	positive: "teal",
	negative: "red",
};

export interface ModerationSummaryProps {
	heading: string;
	/** One bullet per line. */
	lines: string[];
	/** Colour of the left rule. */
	tone?: "neutral" | "positive" | "negative";
}

export function ModerationSummary({ heading, lines, tone = "neutral" }: ModerationSummaryProps) {
	return (
		<Paper
			p="sm"
			radius="md"
			style={{ borderLeft: `3px solid var(--mantine-color-${TONE_COLOR[tone]}-5)` }}
			bg="var(--mantine-color-default-hover)"
		>
			<Text fw={600} size="sm" mb={6}>
				{heading}
			</Text>
			<List size="sm" spacing={4}>
				{lines.map((line) => (
					<List.Item key={line}>{line}</List.Item>
				))}
			</List>
		</Paper>
	);
}
