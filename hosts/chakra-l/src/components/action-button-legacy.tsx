import { Button, Span } from "@chakra-ui/react";

const kindPalette = {
	comment: "blue",
	share: "green",
	favorite: "yellow",
} as const;

export interface ActionButtonLegacyProps {
	/** Which action this is; kept from the pre-rename vocabulary. */
	kind: "comment" | "share" | "favorite";
	/** Visible button text. */
	text: string;
	/** Optional counter drawn after the text. */
	badge?: number;
	/** Renders the button in its engaged state. */
	selected?: boolean;
	/** Controls the button height. */
	size?: "xs" | "sm" | "md";
	/** Fired when the button is activated. */
	onClick: () => void;
}

export function ActionButtonLegacy({
	kind,
	text,
	badge,
	selected = false,
	size = "sm",
	onClick,
}: ActionButtonLegacyProps) {
	return (
		<Button
			size={size}
			variant={selected ? "subtle" : "ghost"}
			colorPalette={kindPalette[kind]}
			borderRadius="full"
			onClick={onClick}
		>
			{text}
			{badge === undefined ? null : (
				<Span fontVariantNumeric="tabular-nums" color="fg.muted">
					{badge}
				</Span>
			)}
		</Button>
	);
}
