import { Card, Stat } from "@chakra-ui/react";

export interface NotificationStatProps {
	/** Metric name shown above the value. */
	label: string;
	/** The already-formatted notification figure. */
	value: string;
	/** Percentage change against the previous period. */
	delta?: number;
	/** Which way the change is read. */
	trend?: "up" | "down" | "flat";
	/** Controls the tile padding. */
	size?: "sm" | "md";
}

export function NotificationStat({ label, value, delta, trend = "flat", size = "md" }: NotificationStatProps) {
	return (
		<Card.Root size={size} variant="subtle" colorPalette="gray">
			<Card.Body>
				<Stat.Root size={size}>
					<Stat.Label>{label}</Stat.Label>
					<Stat.ValueText>{value}</Stat.ValueText>
					{delta === undefined ? null : (
						<Stat.HelpText>
							{trend === "up" ? <Stat.UpIndicator /> : null}
							{trend === "down" ? <Stat.DownIndicator /> : null}
							{delta}%
						</Stat.HelpText>
					)}
				</Stat.Root>
			</Card.Body>
		</Card.Root>
	);
}
