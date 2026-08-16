import { Heart, MessageSquare, MoreHorizontal, Share2 } from "lucide-react";
import type { ComponentType } from "react";

import { Badge } from "~/ui/badge";
import { Button } from "~/ui/button";

const kindIcons: Record<
	"comment" | "share" | "favorite" | "more",
	ComponentType<{ className?: string }>
> = {
	comment: MessageSquare,
	share: Share2,
	favorite: Heart,
	more: MoreHorizontal,
};

export interface ActionButtonLegacyProps {
	/** Which action this is. Predates the tone vocabulary. */
	kind: "comment" | "share" | "favorite" | "more";
	/** Optional caption next to the icon. */
	text?: string;
	/** Rendered as a pill after the caption. */
	badgeCount?: number;
	disabled?: boolean;
	onClick: () => void;
}

export function ActionButtonLegacy({
	kind,
	text,
	badgeCount,
	disabled = false,
	onClick,
}: ActionButtonLegacyProps) {
	const Icon = kindIcons[kind];

	return (
		<Button
			variant="ghost"
			size="sm"
			className="gap-1.5 text-muted-foreground"
			disabled={disabled}
			onClick={onClick}
		>
			<Icon className="h-4 w-4" />
			{text ? <span>{text}</span> : null}
			{badgeCount === undefined ? null : (
				<Badge variant="secondary" className="px-1.5 py-0 text-[10px]">
					{badgeCount}
				</Badge>
			)}
		</Button>
	);
}
