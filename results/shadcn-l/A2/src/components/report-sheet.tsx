import { X } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";
import { Separator } from "~/ui/separator";

const sideStyles = {
	bottom: "inset-x-0 bottom-0 rounded-t-2xl",
	right: "inset-y-0 right-0 w-full max-w-sm",
};

export interface ReportSheetProps {
	open: boolean;
	title: string;
	/** The sheet's contents. */
	children: ReactNode;
	/** Which edge the sheet slides in from. */
	side?: "bottom" | "right";
	onClose: () => void;
}

export function ReportSheet({ open, title, children, side = "bottom", onClose }: ReportSheetProps) {
	if (!open) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 bg-black/40">
			<div className={cn("absolute border bg-background shadow-lg", sideStyles[side])}>
				<div className="flex items-center gap-2 p-4">
					<h2 className="flex-1 text-sm font-semibold">{title}</h2>
					<Button variant="ghost" size="icon" aria-label="Close" onClick={onClose}>
						<X className="h-4 w-4" />
					</Button>
				</div>
				<Separator />
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
}
