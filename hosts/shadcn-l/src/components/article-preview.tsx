import { FileText } from "lucide-react";

import { Card, CardContent } from "~/ui/card";

export interface ArticlePreviewProps {
	/** Canonical URL of the article being previewed. */
	url: string;
	title: string;
	description?: string;
	/** Leading thumbnail; the icon is drawn when it is absent. */
	thumbnailUrl?: string;
	onOpen?: () => void;
}

export function ArticlePreview({ url, title, description, thumbnailUrl, onOpen }: ArticlePreviewProps) {
	return (
		<Card
			className="cursor-pointer overflow-hidden transition-colors hover:bg-accent/30"
			onClick={onOpen}
		>
			<CardContent className="flex items-center gap-3 p-0">
				{thumbnailUrl ? (
					<img src={thumbnailUrl} alt="" className="h-20 w-20 shrink-0 object-cover" />
				) : (
					<div className="flex h-20 w-20 shrink-0 items-center justify-center bg-muted">
						<FileText className="h-5 w-5 text-muted-foreground" />
					</div>
				)}
				<div className="min-w-0 flex-1 py-2 pr-3">
					<div className="truncate text-sm font-semibold">{title}</div>
					{description ? (
						<div className="line-clamp-2 text-xs text-muted-foreground">{description}</div>
					) : null}
					<div className="truncate text-xs text-muted-foreground">{url}</div>
				</div>
			</CardContent>
		</Card>
	);
}
