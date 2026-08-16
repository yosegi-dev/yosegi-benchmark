import { Badge, Card, Group, Image, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface CollectionCardProps {
	title: string;
	/** Slot for the card contents. */
	body: ReactNode;
	/** Cover image drawn above the title. */
	image?: string;
	/** Labels shown under the body. */
	tags?: string[];
	/** Shows the dismiss affordance when provided. */
	onDismiss?: () => void;
}

export function CollectionCard({ title, body, image = "", tags = [], onDismiss }: CollectionCardProps) {
	return (
		<Card withBorder radius="md" padding="md">
			{image === "" ? null : (
				<Card.Section>
					<Image src={image} alt={title} h={140} fit="cover" />
				</Card.Section>
			)}
			<Stack gap="xs" mt={image === "" ? 0 : "sm"}>
				<Group justify="space-between" gap="xs" wrap="nowrap">
					<Text fw={600}>{title}</Text>
					{onDismiss === undefined ? null : (
						<Text size="xs" c="dimmed" onClick={onDismiss} style={{ cursor: "pointer" }}>
							Dismiss
						</Text>
					)}
				</Group>
				{body}
				{tags.length === 0 ? null : (
					<Group gap={6}>
						{tags.map((tag) => (
							<Badge key={tag} size="xs" variant="light" radius="sm">
								{tag}
							</Badge>
						))}
					</Group>
				)}
			</Stack>
		</Card>
	);
}
