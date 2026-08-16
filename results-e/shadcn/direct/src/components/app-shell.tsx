import type { ReactNode } from "react";

import { densityGap, densityPadding } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";
import { Separator } from "~/ui/separator";

export interface AppShellProps {
	/** Rendered across the full width above both columns. */
	header: ReactNode;
	/** The primary column. */
	main: ReactNode;
	/** The secondary column, to the right of `main`. */
	sidebar: ReactNode;
	/** Spacing scale applied to the shell's own padding and gaps. */
	density?: Density;
}

export function AppShell({ header, main, sidebar, density = "cozy" }: AppShellProps) {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
				{header}
			</header>
			<div
				className={cn(
					"mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_320px]",
					densityPadding[density],
					densityGap[density],
				)}
			>
				<main className={cn("flex min-w-0 flex-col", densityGap[density])}>{main}</main>
				<div className="flex gap-6">
					<Separator orientation="vertical" />
					<aside className={cn("flex w-full flex-col", densityGap[density])}>
						{sidebar}
					</aside>
				</div>
			</div>
		</div>
	);
}
