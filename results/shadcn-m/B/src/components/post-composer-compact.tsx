import type { ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";
import { Card, CardContent } from "~/ui/card";
import { Textarea } from "~/ui/textarea";

const sizeStyles = {
	sm: "min-h-[40px] text-xs",
	md: "min-h-[60px] text-sm",
	lg: "min-h-[96px] text-base",
};

export interface PostComposerCompactProps {
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
	placeholder?: string;
	size?: "sm" | "md" | "lg";
	/** Rendered between the input and the submit button. */
	children?: ReactNode;
}

export function PostComposerCompact({
	value,
	onChange,
	onSubmit,
	placeholder = "Write something",
	size = "md",
	children,
}: PostComposerCompactProps) {
	return (
		<Card>
			<CardContent className="flex flex-col gap-2 p-3">
				<Textarea
					value={value}
					placeholder={placeholder}
					className={cn("resize-none", sizeStyles[size])}
					onChange={(event) => onChange(event.target.value)}
				/>
				<div className="flex items-center justify-between gap-2">
					{children}
					<Button size="sm" className="ml-auto rounded-full" onClick={onSubmit}>
						Post
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
