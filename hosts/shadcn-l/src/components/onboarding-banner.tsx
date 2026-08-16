import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";

const toneStyles = {
	info: "border-sky-200 bg-sky-50 text-sky-900",
	success: "border-emerald-200 bg-emerald-50 text-emerald-900",
	warning: "border-amber-200 bg-amber-50 text-amber-900",
	critical: "border-rose-200 bg-rose-50 text-rose-900",
};

const toneIcons: Record<
	"info" | "success" | "warning" | "critical",
	ComponentType<{ className?: string }>
> = {
	info: Info,
	success: CheckCircle2,
	warning: AlertTriangle,
	critical: AlertTriangle,
};

export interface OnboardingBannerProps {
	tone: "info" | "success" | "warning" | "critical";
	title: string;
	/** Detail line under the title. */
	message?: string;
	/** Rendered at the right, typically a link or a button. */
	action?: ReactNode;
	/** When given, a close button appears. */
	onDismiss?: () => void;
}

export function OnboardingBanner({ tone, title, message, action, onDismiss }: OnboardingBannerProps) {
	const Icon = toneIcons[tone];

	return (
		<div className={cn("flex items-start gap-3 rounded-lg border p-3", toneStyles[tone])}>
			<Icon className="mt-0.5 h-4 w-4 shrink-0" />
			<div className="min-w-0 flex-1">
				<div className="text-sm font-semibold">{title}</div>
				{message ? <div className="text-sm opacity-90">{message}</div> : null}
			</div>
			{action}
			{onDismiss ? (
				<Button variant="ghost" size="icon" aria-label="Dismiss" onClick={onDismiss}>
					<X className="h-4 w-4" />
				</Button>
			) : null}
		</div>
	);
}
