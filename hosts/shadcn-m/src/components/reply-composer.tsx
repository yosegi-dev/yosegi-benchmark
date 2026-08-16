import type { AuthorModel } from "~/models";
import { Button } from "~/ui/button";
import { Textarea } from "~/ui/textarea";

import { UserAvatar } from "./user-avatar";

export interface ReplyComposerProps {
	/** The author being replied to; shown as the "Replying to @handle" line. */
	replyingTo: AuthorModel;
	value: string;
	onChange: (value: string) => void;
	onSend: () => void;
	sendLabel?: string;
}

export function ReplyComposer({
	replyingTo,
	value,
	onChange,
	onSend,
	sendLabel = "Reply",
}: ReplyComposerProps) {
	return (
		<div className="flex gap-3 border-t p-3">
			<UserAvatar author={replyingTo} density="compact" />
			<div className="flex-1 space-y-2">
				<p className="text-xs text-muted-foreground">Replying to @{replyingTo.handle}</p>
				<Textarea
					value={value}
					placeholder="Post your reply"
					className="min-h-[56px] resize-none"
					onChange={(event) => onChange(event.target.value)}
				/>
				<div className="flex justify-end">
					<Button
						size="sm"
						className="rounded-full"
						disabled={value.trim().length === 0}
						onClick={onSend}
					>
						{sendLabel}
					</Button>
				</div>
			</div>
		</div>
	);
}
