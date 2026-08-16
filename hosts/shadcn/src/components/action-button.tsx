import { Heart, MessageCircle, MoreHorizontal, Repeat2 } from "lucide-react";
import { cva } from "class-variance-authority";
import type { ComponentType } from "react";

import { densityControl } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { ActionTone, Density } from "~/models";
import { Button } from "~/ui/button";

const toneStyles = cva("gap-1.5 rounded-full px-2 text-muted-foreground", {
	variants: {
		tone: {
			reply: "hover:bg-sky-500/10 hover:text-sky-600",
			repost: "hover:bg-emerald-500/10 hover:text-emerald-600",
			like: "hover:bg-rose-500/10 hover:text-rose-600",
			quiet: "hover:bg-accent hover:text-foreground",
		},
		active: {
			true: "",
			false: "",
		},
	},
	compoundVariants: [
		{ tone: "reply", active: true, className: "text-sky-600" },
		{ tone: "repost", active: true, className: "text-emerald-600" },
		{ tone: "like", active: true, className: "text-rose-600" },
		{ tone: "quiet", active: true, className: "text-foreground" },
	],
	defaultVariants: {
		tone: "quiet",
		active: false,
	},
});

const TONE_ICONS: Record<ActionTone, ComponentType<{ className?: string }>> = {
	reply: MessageCircle,
	repost: Repeat2,
	like: Heart,
	quiet: MoreHorizontal,
};

export interface ActionButtonProps {
	/** Which post action this is; selects the icon and the hover colour. */
	tone: ActionTone;
	/** Accessible name for the action, e.g. `"Reply"`. */
	label: string;
	/** Shown next to the icon; omitted entirely when absent. */
	count?: number;
	/** Whether the viewer has already performed this action. */
	active?: boolean;
	/** Spacing scale, which here selects the control height. */
	density?: Density;
	/** Called when the button is pressed. */
	onPress: () => void;
}

export function ActionButton({
	tone,
	label,
	count,
	active = false,
	density = "cozy",
	onPress,
}: ActionButtonProps) {
	const Icon = TONE_ICONS[tone];

	return (
		<Button
			variant="ghost"
			size="sm"
			className={cn(toneStyles({ tone, active }), densityControl[density])}
			aria-label={label}
			aria-pressed={active}
			onClick={onPress}
		>
			<Icon className={cn("h-4 w-4", active && tone === "like" && "fill-current")} />
			{count === undefined ? null : <span className="tabular-nums">{count}</span>}
		</Button>
	);
}
