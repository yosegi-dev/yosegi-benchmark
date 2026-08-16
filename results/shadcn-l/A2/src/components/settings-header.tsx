import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

export interface SettingsHeaderProps {
	title: string;
	/** Second line, e.g. a post count or a member count. */
	subtitle?: string;
	/** Rendered to the left of the title. */
	avatar?: ReactNode;
	/** Rendered on the right, e.g. an overflow menu. */
	actions?: ReactNode;
	/** Pins the header to the top of its scroll container. */
	sticky?: boolean;
}

export function SettingsHeader({ title, subtitle, avatar, actions, sticky = false }: SettingsHeaderProps) {
	return (
		<div className={cn("bg-background", sticky && "sticky top-0 z-30")}>
			<div className="flex items-center gap-3 px-4 py-3">
				{avatar}
				<div className="min-w-0 flex-1">
					<h2 className="truncate text-base font-semibold leading-tight">{title}</h2>
					{subtitle ? (
						<p className="truncate text-xs text-muted-foreground">{subtitle}</p>
					) : null}
				</div>
				{actions}
			</div>
			<Separator />
		</div>
	);
}
