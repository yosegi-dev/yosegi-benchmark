import { ChevronDown, Shield } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";
import { Separator } from "~/ui/separator";

export interface AppealPanelProps {
	heading: string;
	/** The panel's contents. */
	body: ReactNode;
	/** Rendered under a rule at the bottom of the panel. */
	footer?: ReactNode;
	collapsed?: boolean;
	/** Receives the state the panel is moving to. */
	onToggle?: (collapsed: boolean) => void;
}

export function AppealPanel({
	heading,
	body,
	footer,
	collapsed = false,
	onToggle,
}: AppealPanelProps) {
	return (
		<Card>
			<CardHeader className="flex-row items-center gap-2 space-y-0 p-4">
				<Shield className="h-4 w-4 text-muted-foreground" />
				<CardTitle className="flex-1 text-sm">{heading}</CardTitle>
				<button
					type="button"
					aria-expanded={!collapsed}
					aria-label={collapsed ? "Expand" : "Collapse"}
					onClick={() => onToggle?.(!collapsed)}
				>
					<ChevronDown
						className={cn(
							"h-4 w-4 text-muted-foreground transition-transform",
							collapsed && "-rotate-90",
						)}
					/>
				</button>
			</CardHeader>
			{collapsed ? null : (
				<CardContent className="p-4 pt-0 text-sm">
					{body}
					{footer ? (
						<>
							<Separator className="my-3" />
							{footer}
						</>
					) : null}
				</CardContent>
			)}
		</Card>
	);
}
