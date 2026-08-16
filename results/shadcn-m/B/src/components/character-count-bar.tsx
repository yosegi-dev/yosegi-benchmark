import { cn } from "~/lib/utils";

const toneStyles = {
	default: "bg-primary",
	warning: "bg-amber-500",
	danger: "bg-rose-500",
};

export interface CharacterCountBarProps {
	value: number;
	/** The value that counts as full. */
	max?: number;
	/** Shown above the track. */
	label?: string;
	tone?: "default" | "warning" | "danger";
	/** Prints the percentage at the right of the label. */
	showValue?: boolean;
}

export function CharacterCountBar({
	value,
	max = 100,
	label,
	tone = "default",
	showValue = false,
}: CharacterCountBarProps) {
	const percent = Math.max(0, Math.min(100, Math.round((value / max) * 100)));

	return (
		<div className="flex flex-col gap-1">
			{label || showValue ? (
				<div className="flex items-center justify-between text-xs text-muted-foreground">
					<span>{label}</span>
					{showValue ? <span className="tabular-nums">{percent}%</span> : null}
				</div>
			) : null}
			<div
				role="progressbar"
				aria-valuenow={percent}
				aria-valuemin={0}
				aria-valuemax={100}
				className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
			>
				<div className={cn("h-full", toneStyles[tone])} style={{ width: percent + "%" }} />
			</div>
		</div>
	);
}
