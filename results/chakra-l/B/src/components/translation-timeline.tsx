import { Timeline } from "@chakra-ui/react";

export interface TranslationTimelineProps {
	/** The translation entries, newest first. */
	entries: { id: string; title: string; description: string; marker: string }[];
	/** Controls the indicator size and the spacing between entries. */
	size?: "sm" | "md" | "lg";
	/** Draws the indicators filled rather than outlined. */
	solid?: boolean;
}

export function TranslationTimeline({ entries, size = "md", solid = false }: TranslationTimelineProps) {
	return (
		<Timeline.Root size={size} variant={solid ? "solid" : "subtle"}>
			{entries.map((entry) => (
				<Timeline.Item key={entry.id}>
					<Timeline.Connector>
						<Timeline.Separator />
						<Timeline.Indicator>{entry.marker}</Timeline.Indicator>
					</Timeline.Connector>
					<Timeline.Content>
						<Timeline.Title>{entry.title}</Timeline.Title>
						<Timeline.Description>{entry.description}</Timeline.Description>
					</Timeline.Content>
				</Timeline.Item>
			))}
		</Timeline.Root>
	);
}
