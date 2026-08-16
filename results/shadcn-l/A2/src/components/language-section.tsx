import type { ReactNode } from "react";

import { Separator } from "~/ui/separator";

export interface LanguageSectionProps {
	heading: string;
	/** Explains the group of controls under the heading. */
	description?: string;
	/** The rows or controls belonging to this section. */
	children: ReactNode;
	/** Draws a rule between the heading and the contents. */
	divider?: boolean;
}

export function LanguageSection({ heading, description, children, divider = true }: LanguageSectionProps) {
	return (
		<section className="flex flex-col gap-2 py-4">
			<div className="px-4">
				<h3 className="text-sm font-semibold">{heading}</h3>
				{description ? (
					<p className="text-xs text-muted-foreground">{description}</p>
				) : null}
			</div>
			{divider ? <Separator /> : null}
			<div className="flex flex-col">{children}</div>
		</section>
	);
}
