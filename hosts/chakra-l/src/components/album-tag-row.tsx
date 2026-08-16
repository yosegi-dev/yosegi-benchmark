import { Tag, Wrap } from "@chakra-ui/react";

export interface AlbumTagRowProps {
	/** The album tags to show, in display order. */
	tags: { id: string; label: string }[];
	/** Adds a close trigger to every tag. */
	removable?: boolean;
	/** Fired with the id of the tag that was removed. */
	onTagRemove?: (id: string) => void;
	/** Controls the tag height. */
	size?: "sm" | "md" | "lg";
}

export function AlbumTagRow({ tags, removable = false, onTagRemove, size = "md" }: AlbumTagRowProps) {
	return (
		<Wrap gap="2">
			{tags.map((tag) => (
				<Tag.Root key={tag.id} size={size} variant="subtle" colorPalette="green">
					<Tag.Label>{tag.label}</Tag.Label>
					{removable ? <Tag.CloseTrigger onClick={() => onTagRemove?.(tag.id)} /> : null}
				</Tag.Root>
			))}
		</Wrap>
	);
}
