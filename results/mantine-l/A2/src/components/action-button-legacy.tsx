import { Button, Text } from "@mantine/core";

const KIND_COLOR: Record<"comment" | "share" | "favorite", string> = {
	comment: "blue",
	share: "green",
	favorite: "red",
};

export interface ActionButtonLegacyProps {
	/** Which action this is. */
	kind: "comment" | "share" | "favorite";
	/** Visible text. */
	text: string;
	/** Shown after the text when set. */
	total?: number;
	/** Renders the engaged state. */
	selected?: boolean;
	onClick: () => void;
}

export function ActionButtonLegacy({
	kind,
	text,
	total,
	selected = false,
	onClick,
}: ActionButtonLegacyProps) {
	return (
		<Button
			variant={selected ? "light" : "subtle"}
			color={KIND_COLOR[kind]}
			size="xs"
			radius="xl"
			onClick={onClick}
		>
			{text}
			{total === undefined ? null : (
				<Text component="span" size="xs" c="dimmed" ml={6}>
					{total}
				</Text>
			)}
		</Button>
	);
}
