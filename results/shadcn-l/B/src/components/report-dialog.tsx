import { Button } from "~/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/ui/card";

export interface ReportDialogProps {
	open: boolean;
	title: string;
	/** Explains what confirming will do. */
	description?: string;
	/** Text of the confirming button. */
	confirmLabel?: string;
	/** Draws the confirming button in the destructive style. */
	destructive?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export function ReportDialog({
	open,
	title,
	description,
	confirmLabel = "Confirm",
	destructive = false,
	onConfirm,
	onCancel,
}: ReportDialogProps) {
	if (!open) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
			<Card role="dialog" aria-modal className="w-full max-w-sm">
				<CardHeader className="p-4">
					<CardTitle className="text-base">{title}</CardTitle>
				</CardHeader>
				{description ? (
					<CardContent className="p-4 pt-0 text-sm text-muted-foreground">
						{description}
					</CardContent>
				) : null}
				<CardFooter className="justify-end gap-2 p-4 pt-0">
					<Button variant="ghost" onClick={onCancel}>
						Cancel
					</Button>
					<Button variant={destructive ? "destructive" : "default"} onClick={onConfirm}>
						{confirmLabel}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
