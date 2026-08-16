import { cn } from "~/lib/utils";
import type { AuthorModel } from "~/models";
import { Separator } from "~/ui/separator";

import { UserAvatar } from "./user-avatar";

export interface PostSummaryStat {
	label: string;
	value: number;
}

export interface PostSummaryProps {
	author: AuthorModel;
	/** One-line description of what is being summarised. */
	headline: string;
	stats: PostSummaryStat[];
	/** Drops the padding and the avatar down a size. */
	dense?: boolean;
}

export function PostSummary({ author, headline, stats, dense = false }: PostSummaryProps) {
	return (
		<div className={cn("flex flex-col gap-2", dense ? "p-2" : "p-4")}>
			<div className="flex items-center gap-2">
				<UserAvatar author={author} density={dense ? "compact" : "cozy"} />
				<div className="min-w-0">
					<div className="truncate text-sm font-semibold">{author.displayName}</div>
					<div className="truncate text-xs text-muted-foreground">{headline}</div>
				</div>
			</div>
			<Separator />
			<dl className="flex items-center gap-4">
				{stats.map((stat) => (
					<div key={stat.label} className="flex flex-col">
						<dt className="text-xs text-muted-foreground">{stat.label}</dt>
						<dd className="text-sm font-semibold tabular-nums">
							{stat.value.toLocaleString("en-US")}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
