import type { ReactNode } from "react";

import type { AuthorModel, Visibility } from "~/models";
import { Button } from "~/ui/button";
import { Card, CardContent, CardFooter } from "~/ui/card";
import { Separator } from "~/ui/separator";
import { Textarea } from "~/ui/textarea";

import { UserAvatar } from "./user-avatar";

const VISIBILITY_HINTS: Record<Visibility, string> = {
	public: "Anyone can see this post.",
	followers: "Only your followers can see this post.",
	circle: "Only your circle can see this post.",
	unlisted: "Anyone with the link can see this post.",
};

export interface PostComposerProps {
	/** The signed-in user, shown alongside the input. */
	viewer: AuthorModel;
	/** The current text of the post being written. */
	draft: string;
	/** The audience the draft will be posted to; drives the hint under the input. */
	visibility: Visibility;
	/** Slot for the audience control. */
	visibilityPicker: ReactNode;
	/** Called with the next draft text on every keystroke. */
	onDraftChange: (draft: string) => void;
	/** Called when the submit button is pressed. */
	onSubmitPress: () => void;
	/** Text of the submit button. */
	submitLabel?: string;
}

export function PostComposer({
	viewer,
	draft,
	visibility,
	visibilityPicker,
	onDraftChange,
	onSubmitPress,
	submitLabel = "Post",
}: PostComposerProps) {
	return (
		<Card>
			<CardContent className="flex gap-3 p-4">
				<UserAvatar author={viewer} />
				<div className="flex-1 space-y-2">
					<Textarea
						value={draft}
						placeholder="What's happening?"
						className="min-h-[80px] resize-none border-0 px-0 shadow-none focus-visible:ring-0"
						onChange={(event) => onDraftChange(event.target.value)}
					/>
					<p className="text-xs text-muted-foreground">{VISIBILITY_HINTS[visibility]}</p>
				</div>
			</CardContent>
			<Separator />
			<CardFooter className="flex items-center justify-between gap-2 p-4">
				{visibilityPicker}
				<Button
					className="rounded-full"
					disabled={draft.trim().length === 0}
					onClick={onSubmitPress}
				>
					{submitLabel}
				</Button>
			</CardFooter>
		</Card>
	);
}
